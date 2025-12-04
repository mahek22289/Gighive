// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
// import { Badge } from '../ui/badge';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import {
//   Search,
//   Filter,
//   MapPin,
//   Clock,
//   DollarSign,
//   Star,
//   Bookmark,
//   Zap
// } from 'lucide-react';

// export function FindGigs({ user }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const gigs = [
//     {
//       id: 1,
//       title: "React Developer for E-commerce Platform",
//       company: "TechStart Inc.",
//       location: "Remote",
//       type: "Part-time",
//       duration: "3 months",
//       pay: "$25/hour",
//       credits: 150,
//       description: "Looking for a skilled React developer to help build our new e-commerce platform...",
//       skills: ["React", "JavaScript", "CSS", "Node.js"],
//       posted: "2 hours ago",
//       applicants: 23,
//       urgent: true,
//       aiMatch: 95
//     },
//     {
//       id: 2,
//       title: "UI/UX Designer for Mobile App",
//       company: "DesignFlow Studio",
//       location: "San Francisco, CA",
//       type: "Project",
//       duration: "6 weeks",
//       pay: "$30/hour",
//       credits: 200,
//       description: "Create intuitive user interface designs for our fitness tracking mobile app...",
//       skills: ["Figma", "UI Design", "Mobile", "Prototyping"],
//       posted: "4 hours ago",
//       applicants: 18,
//       urgent: false,
//       aiMatch: 88
//     }
//   ];

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">Find Gigs</h1>
//         <p className="text-muted-foreground">Discover opportunities that match your skills</p>
//       </div>

//       {/* Search and Filters */}
//       <div className="mb-6 space-y-4">
//         <div className="flex gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
//             <Input
//               placeholder="Search gigs, companies, or skills..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//           <Button variant="outline">
//             <Filter size={16} className="mr-2" />
//             Filters
//           </Button>
//           <Button variant="outline">
//             <Zap size={16} className="mr-2" />
//             AI Search
//           </Button>
//         </div>

//         {/* Quick Filters */}
//         <div className="flex gap-2 flex-wrap">
//           {['Remote', 'Part-time', 'Tech', 'Design', 'Urgent', 'High Pay'].map((filter) => (
//             <Badge key={filter} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
//               {filter}
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* AI Recommendations */}
//       <Card className="mb-6 border-primary/20 bg-primary/5">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Zap className="text-primary" size={20} />
//             AI Recommendations for You
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-sm text-muted-foreground mb-4">
//             Based on your skills in React, JavaScript, and UI Design, we found these perfect matches:
//           </p>
//           <div className="flex gap-2">
//             <Badge variant="outline">3 Perfect Matches</Badge>
//             <Badge variant="outline">8 Good Matches</Badge>
//             <Badge variant="outline">15 Relevant Gigs</Badge>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Gig List */}
//       <div className="space-y-6">
//         {gigs.map((gig) => (
//           <Card key={gig.id} className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <h3 className="text-xl font-semibold">{gig.title}</h3>
//                     {gig.urgent && <Badge variant="destructive">Urgent</Badge>}
//                     <Badge variant="outline" className="text-green-600 border-green-600">
//                       {gig.aiMatch}% AI Match
//                     </Badge>
//                   </div>
//                   <p className="text-muted-foreground font-medium">{gig.company}</p>
//                 </div>
//                 <Button variant="ghost" size="sm">
//                   <Bookmark size={16} />
//                 </Button>
//               </div>

//               <p className="text-muted-foreground mb-4">{gig.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {gig.skills.map((skill, index) => (
//                   <Badge key={index} variant="outline">{skill}</Badge>
//                 ))}
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//                 <div className="flex items-center gap-2">
//                   <MapPin size={16} className="text-muted-foreground" />
//                   <span className="text-sm">{gig.location}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock size={16} className="text-muted-foreground" />
//                   <span className="text-sm">{gig.duration}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <DollarSign size={16} className="text-muted-foreground" />
//                   <span className="text-sm">{gig.pay}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Star size={16} className="text-yellow-500" />
//                   <span className="text-sm">{gig.credits} Credits</span>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm text-muted-foreground">
//                     {gig.applicants} applicants • Posted {gig.posted}
//                   </span>
//                 </div>
//                 <div className="flex gap-2">
//                   <Button variant="outline">
//                     View Details
//                   </Button>
//                   <Button>
//                     Apply Now
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <Button variant="outline" size="lg">
//           Load More Gigs
//         </Button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  Zap,
} from "lucide-react";

export function FindGigs({ user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGig, setSelectedGig] = useState(null);
  const [applicationMessage, setApplicationMessage] = useState("");

const handleApply = async (gigId) => {
  try {
    await axios.post(`http://localhost:5001/api/gigs/${gigId}/apply`, {
      message: applicationMessage,   // ✅ student's description
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    alert("Application submitted!");
    setApplicationMessage("");
    setSelectedGig(null);
  } catch (err) {
    console.error("Apply error:", err);
    alert("Something went wrong. Please try again.");
  }
};



  // 🔄 Fetch gigs from backend
  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/gigs");
        const data = await res.json();
        setGigs(data);
      } catch (err) {
        console.error("❌ Failed to fetch gigs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  // 🔍 Filter gigs by search term
  const filteredGigs = gigs.filter(
    (gig) =>
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.skills?.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Find Gigs</h1>
        <p className="text-muted-foreground">
          Discover opportunities that match your skills
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Search gigs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter size={16} className="mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <Zap size={16} className="mr-2" />
            AI Search
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 flex-wrap">
          {["Remote", "Part-time", "Tech", "Design", "Urgent", "High Pay"].map(
            (filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {filter}
              </Badge>
            )
          )}
        </div>
      </div>

      {/* AI Recommendations */}
      <Card className="mb-6 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="text-primary" size={20} />
            AI Recommendations for You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Based on your skills in React, JavaScript, and UI Design, we found
            these perfect matches:
          </p>
          <div className="flex gap-2">
            <Badge variant="outline">3 Perfect Matches</Badge>
            <Badge variant="outline">8 Good Matches</Badge>
            <Badge variant="outline">15 Relevant Gigs</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Gig List */}
      <div className="space-y-6">
        {loading ? (
          <p className="text-muted-foreground">Loading gigs...</p>
        ) : filteredGigs.length === 0 ? (
          <p className="text-muted-foreground">No gigs found.</p>
        ) : (
          filteredGigs.map((gig) => {
            const id = gig._id || gig.id;
            const isExpanded = !!expanded[id];
            const desc = gig.description || "";
            const shortDesc =
              desc.length > 250 ? desc.slice(0, 250) + "..." : desc;

            return (
              <Card key={id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{gig.title}</h3>
                        {gig.urgent && (
                          <Badge variant="destructive">Urgent</Badge>
                        )}
                        {gig.aiMatch && (
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-600"
                          >
                            {gig.aiMatch}% AI Match
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {gig.company || "Unknown Company"}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark size={16} />
                    </Button>
                  </div>

                  {/* Job description (truncated with Read more) */}
                  <div className="mb-4">
                    <div className="text-muted-foreground whitespace-pre-wrap">
                      {isExpanded ? desc : shortDesc}
                    </div>
                    {desc.length > 250 && (
                      <div className="mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpand(id)}
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 space-y-4">
                    <label className="block text-sm font-medium">
                      Why are you a good fit?
                    </label>
                    <textarea
                      className="w-full border rounded-md p-2 text-sm"
                      rows={4}
                      placeholder="Write a short message to the employer..."
                      value={applicationMessage}
                      onChange={(e) => setApplicationMessage(e.target.value)}
                    />
                  </div>

                  {/* Added structured details: responsibilities, requirements, benefits */}
                  {(gig.responsibilities?.length ||
                    gig.requirements?.length ||
                    gig.benefits?.length) && (
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {gig.responsibilities?.length && (
                        <div>
                          <h4 className="font-semibold mb-2">
                            Responsibilities
                          </h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {gig.responsibilities.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {gig.requirements?.length && (
                        <div>
                          <h4 className="font-semibold mb-2">Requirements</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {gig.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {gig.benefits?.length && (
                        <div>
                          <h4 className="font-semibold mb-2">Benefits</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {gig.benefits.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {gig.skills?.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span className="text-sm">{gig.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-muted-foreground" />
                      <span className="text-sm">{gig.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-muted-foreground" />
                      <span className="text-sm">{gig.pay}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-sm">
                        {gig.credits || 0} Credits
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {gig.applicants || 0} applicants • Posted recently
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedGig(gig)}
                      >
                        View Details
                      </Button>
                      <Button onClick={() => handleApply(id)}>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Gigs
        </Button>
      </div>

      {/* Modal for Gig Details */}
      {selectedGig && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedGig(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">{selectedGig.title}</h2>
            <p className="text-muted-foreground mb-4">
              {selectedGig.company || "Unknown Company"}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <strong>Posted By:</strong> {selectedGig.postedBy || "Unknown"}
              </div>
              <div>
                <strong>Location:</strong> {selectedGig.location}
              </div>
              <div>
                <strong>Duration:</strong> {selectedGig.duration}
              </div>
              <div>
                <strong>Pay:</strong> {selectedGig.pay}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Job Description</h3>
              <div className="text-muted-foreground whitespace-pre-wrap">
                {selectedGig.description}
              </div>
            </div>

            {/* Detailed sections in modal */}
            {selectedGig.responsibilities?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {selectedGig.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedGig.requirements?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {selectedGig.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedGig.benefits?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Benefits</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {selectedGig.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4">
              <strong>How to Apply:</strong>
              <div className="text-sm text-muted-foreground mt-2">
                {selectedGig.howToApply ||
                  "Click Apply Now to start your application. You may be redirected to the employer site."}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setSelectedGig(null)}>
                Close
              </Button>
              <Button
                onClick={() => handleApply(selectedGig._id || selectedGig.id)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
