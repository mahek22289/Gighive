const Gig = require('../models/gig.js');

// Utility to get io instance
const getIo = (reqOrApp) => {
  const app = reqOrApp.app ? reqOrApp.app : reqOrApp;
  return app && app.get ? app.get('io') : null;
};

// Recompute stats per employer
const computeStats = async (employerId) => {
  const userGigs = await Gig.find({ employer: employerId });

  const activeCount = userGigs.filter(g => g.status === 'active').length;

  const totalApps = userGigs.reduce((sum, gig) => sum + (gig.applications?.length || 0), 0);

  const totalHires = userGigs.reduce((sum, gig) => {
    const hiredApps = gig.applications?.filter(app => app.status === 'hired') || [];
    return sum + hiredApps.length;
  }, 0);

  return [
    { title: "Active Gigs", value: String(activeCount), change: `+${activeCount}`, icon: "FileText", trend: "stable" },
    { title: "Total Applications", value: String(totalApps), change: `+${totalApps}`, icon: "Users", trend: "stable" },
    { title: "Successful Hires", value: String(totalHires), change: `+${totalHires}`, icon: "Award", trend: "stable" },
    { title: "Money Saved", value: `₹${(totalHires * 350).toLocaleString()}`, change: "vs traditional hiring", icon: "IndianRupee", trend: "stable" }
  ];
};

// Recompute analytics per employer
const computeAnalytics = async (employerId) => {
  const userGigs = await Gig.find({ employer: employerId });
  const gigCount = Math.max(1, userGigs.length);

  const totalApps = userGigs.reduce((sum, gig) => sum + (gig.applications?.length || 0), 0);
  const appRate = Math.round((totalApps / gigCount) * 100);

  const totalResponses = userGigs.reduce((sum, g) => sum + (g.responses || 0), 0);
  const avgResponses = totalResponses / gigCount;
  const hours = Math.max(0.5, Math.round((3 / Math.max(1, avgResponses)) * 10) / 10);

  const totalHires = userGigs.reduce((sum, gig) => {
    const hiredApps = gig.applications?.filter(app => app.status === 'hired') || [];
    return sum + hiredApps.length;
  }, 0);
  const hireRate = Math.round((totalHires / gigCount) * 100);

  return [
    { metric: "Application Rate", value: `${appRate}%`, description: "Applications per gig view (approx)", trend: appRate > 2 ? "up" : "stable" },
    { metric: "Response Time", value: `${hours} hrs`, description: "", trend: hours < 3 ? "down" : "up" },
    { metric: "Hire Rate", value: `${hireRate}%`, description: "", trend: hireRate > 50 ? "up" : "stable" }
  ];
};

// API endpoints
exports.getStats = async (req, res) => {
  try {
    if (!req.user?.id) return res.status(401).json({ error: "Unauthorized" });
    const stats = await computeStats(req.user.id);
    res.json(stats);
  } catch (err) {
    console.error("Error in getStats:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getActiveGigs = async (req, res) => {
  try {
    if (!req.user?.id) return res.status(401).json({ error: "Unauthorized" });
    const gigs = await Gig.find({ employer: req.user.id }).lean().populate('applications');
        res.json(gigs); 
  } catch (err) {
    console.error("Error in getActiveGigs:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getRecentApplications = async (req, res) => {
  try {
    if (!req.user?.id) return res.status(401).json({ error: "Unauthorized" });
    const userGigs = await Gig.find({ employer: req.user.id }).populate('applications.student').lean();

    const allApps = userGigs.flatMap(gig =>
      gig.applications.map(app => ({
        gigTitle: gig.title || 'Untitled Gig',
        applicantName: app.student?.name || 'Unknown',
        university: app.student?.university || 'Unknown',
        rating: app.rating || 0,
        experience: app.experience || 'N/A',
        // ✅ send raw ISO date string, not localized
        appliedDate: app.appliedAt ? app.appliedAt : null,
        status: app.status || 'pending',
        message: app.message || null,
        proposal: app.proposal || null

      }))
    );

    const recentApps = allApps
      .filter(app => app.appliedDate) // only keep those with a date
      .sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate))
      .slice(0, 10);

    res.json(recentApps);
  } catch (err) {
    console.error("Error in getRecentApplications:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    if (!req.user?.id) return res.status(401).json({ error: "Unauthorized" });
    const analytics = await computeAnalytics(req.user.id);
    res.json(analytics);
  } catch (err) {
    console.error("Error in getAnalytics:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Mutators
exports.updateGig = async (req, res) => {
  try {
    if (!req.user?.id) return res.status(401).json({ error: "Unauthorized" });
    const gig = await Gig.findOne({ _id: req.params.id, employer: req.user.id });
    if (!gig) return res.status(404).json({ error: "Gig not found" });

    const allowed = ['title', 'applications', 'budget', 'deadline', 'status', 'responses'];
    allowed.forEach(k => {
      if (req.body[k] !== undefined) gig[k] = req.body[k];
    });

    await gig.save();
    res.json(gig);
  } catch (err) {
    console.error("Error in updateGig:", err);
    res.status(500).json({ error: "Server error" });
  }
};
