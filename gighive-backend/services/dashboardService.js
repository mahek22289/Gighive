const Gig = require('../models/gig.js');

async function calculateStats() {
  const activeGigs = await Gig.countDocuments({ status: 'active' });

  const totalApplicationsAgg = await Gig.aggregate([
    { $unwind: "$applications" },
    { $count: "total" }
  ]);
  const totalApplications = totalApplicationsAgg[0]?.total || 0;

  const successfulHires = await Gig.countDocuments({ status: 'hired' });

  // Optional: calculate money saved based on gig budgets
  const budgetAgg = await Gig.aggregate([
    { $match: { status: { $in: ['active', 'hired'] } } },
    { $group: { _id: null, totalBudget: { $sum: "$budget" } } }
  ]);
  const totalBudget = budgetAgg[0]?.totalBudget || 0;
  const moneySaved = `$${(totalBudget * 0.3).toLocaleString()}`; // assume 30% savings

  return [
    {
      title: "Active Gigs",
      value: activeGigs,
      change: "+2 this month", // optional: make dynamic later
      icon: "FileText",
      trend: "up"
    },
    {
      title: "Total Applications",
      value: totalApplications,
      change: "+23 this week", // optional: make dynamic later
      icon: "Users",
      trend: "up"
    },
    {
      title: "Successful Hires",
      value: successfulHires,
      change: "+5 this month", // optional: make dynamic later
      icon: "Award",
      trend: "up"
    },
    {
      title: "Money Saved",
      value: moneySaved,
      change: "vs traditional hiring",
      icon: "DollarSign",
      trend: "stable"
    }
  ];
}

async function calculateAnalytics() {
  const totalGigs = await Gig.countDocuments();

  const totalApplicationsAgg = await Gig.aggregate([
    { $unwind: "$applications" },
    { $count: "total" }
  ]);
  const totalApplications = totalApplicationsAgg[0]?.total || 0;

  const hiredGigs = await Gig.countDocuments({ status: 'hired' });

  const applicationRate = totalGigs > 0 ? `${Math.round((totalApplications / totalGigs) * 100)}%` : "0%";
  const hireRate = totalGigs > 0 ? `${Math.round((hiredGigs / totalGigs) * 100)}%` : "0%";

  return [
    {
      metric: "Application Rate",
      value: applicationRate,
      description: "Applications per gig posted",
      trend: "up"
    },
    {
      metric: "Response Time",
      value: "2.3 hrs", // optional: calculate from timestamps later
      description: "Average response to applications",
      trend: "stable"
    },
    {
      metric: "Hire Rate",
      value: hireRate,
      description: "Successful placements",
      trend: "up"
    }
  ];
}

module.exports = { calculateStats, calculateAnalytics };
