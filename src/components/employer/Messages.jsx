import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Search,
  Send,
  MoreVertical,
  Paperclip,
  Phone,
  Video
} from 'lucide-react';

export function Messages({ user }) {
  const { userId } = useParams();
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);
  const socketRef = useRef(null);

  const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

  useEffect(() => {
    try {
      const socketUrl =
        (typeof process !== 'undefined' && process.env?.REACT_APP_SOCKET_URL) ||
        (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SOCKET_URL) ||
        null;

      socketRef.current = socketUrl ? io(socketUrl) : io();

      socketRef.current.on('connect_error', (err) => {
        console.error('Socket connection error:', err?.message || err);
      });
    } catch (err) {
      console.warn('Socket initialization failed:', err);
      socketRef.current = null;
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    let canceled = false;

    async function fetchConversation() {
      try {
        const res = await axios.get(`/api/conversations/${userId}`);
        if (canceled) return;

        if (res.data?.participant) {
          setSelectedChat({ participant: res.data.participant });
          setMessages(
            (res.data.messages || []).map((m, index) => ({
              id:
                m._id ||
                m.id ||
                `${m.senderId}-${m.receiverId}-${m.timestamp || Date.now()}-${index}` ||
                generateId(),
              ...m,
              isOwn: m.senderId === user?._id,
              timestamp: m.timestamp
                ? new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }))
          );
        } else {
          setSelectedChat(null);
          setMessages([]);
        }
      } catch (err) {
        console.error('Failed to fetch conversation:', err);
      }
    }

    if (userId) {
      fetchConversation();
    } else {
      setSelectedChat(null);
      setMessages([]);
    }

    return () => {
      canceled = true;
    };
  }, [userId, user?._id]);

  useEffect(() => {
    if (!socketRef.current) return;

    const handleReceive = (msg) => {
      if (msg.senderId === userId || msg.receiverId === userId) {
        setMessages((prev) => [
          ...prev,
          {
            id: msg._id || msg.id || generateId() + '-' + prev.length,
            ...msg,
            isOwn: msg.senderId === user?._id,
            timestamp: msg.timestamp
              ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    };

    socketRef.current.on('receive_message', handleReceive);

    return () => {
      socketRef.current.off('receive_message', handleReceive);
    };
  }, [userId, user?._id]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!user?._id || !message.trim()) return;

    const newMessage = {
      senderId: user._id,
      receiverId: userId,
      content: message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId() + '-' + prev.length,
          ...newMessage,
          isOwn: true,
          timestamp: new Date(newMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);

      socketRef.current?.emit('send_message', newMessage);

      try {
        await axios.post('/api/messages', newMessage);
      } catch (err) {
        console.error('Failed to persist message:', err);
      }

      setMessage('');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-6rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Communicate with student applicants</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <Card className="lg:col-span-1 h-fit max-h-full overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>
            <div className="overflow-y-auto max-h-96">
              <p className="p-4 text-sm text-muted-foreground">Select a conversation from Applications</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col h-full">
          {selectedChat ? (
            <>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="font-semibold">{selectedChat.participant.avatar || selectedChat.participant.name?.[0] || '?'}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{selectedChat.participant.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedChat.participant.university} •
                      <span className={selectedChat.participant.online ? 'text-green-600' : 'text-muted-foreground'}>
                        {selectedChat.participant.online ? ' Online' : ' Offline'}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm"><Phone size={16} /></Button>
                  <Button variant="ghost" size="sm"><Video size={16} /></Button>
                  <Button variant="ghost" size="sm"><MoreVertical size={16} /></Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No messages yet — start the conversation!</p>
                ) : (
                  messages.map((msg, idx) => (
                    <div key={`${msg.id ?? 'msg'}-${idx}`} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-xs mt-1 ${msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-4 border-t flex gap-2">
                <Button variant="outline" size="sm"><Paperclip size={16} /></Button>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage}><Send size={16} /></Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-medium text-muted-foreground mb-2">Select a conversation</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a conversation from the Applications page to start messaging
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Messages;
