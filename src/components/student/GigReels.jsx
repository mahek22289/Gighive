import React, { useState, useEffect } from 'react';
import axios from 'axios';

// --- Self-Contained SVG Icons (replaces lucide-react import) ---
const Play = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
const Heart = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const MessageCircle = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const Share = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>;
const Bookmark = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;

export function GigReels() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReels = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5001/api/reels/feed');
        setReels(response.data);
        setError('');
      } catch (err) {
        setError('Could not fetch GigReels. Please try again later.');
        console.error('Fetch Reels Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReels();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Gig Reels</h1>
        <p className="text-gray-500">Loading video introductions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Gig Reels</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Gig Reels</h1>
        <p className="text-gray-500">Watch video introductions from employers</p>
      </div>

      {reels.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No GigReels have been uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel._id} className="overflow-hidden border rounded-lg shadow-md">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-purple-100 to-blue-100">
                <video
                  src={reel.mediaUrl}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center pointer-events-none">
                   <div className="rounded-full w-16 h-16 bg-white/30 backdrop-blur-sm text-white flex items-center justify-center">
                    <Play className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 mt-2">{reel.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{reel.user?.name || 'A GigHive User'}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{reel.likes || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{reel.comments || 0}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2"><Bookmark className="w-4 h-4" /></button>
                    <button className="p-2"><Share className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
