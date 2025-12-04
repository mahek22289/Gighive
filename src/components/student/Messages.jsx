import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Search,
  Send,
  MoreVertical,
  Paperclip,
  Phone,
  Video
} from 'lucide-react';

const socket = io('http://localhost:5001'); // ✅ same as your backend port

export default function StudentMessages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([
    {
      id: 1,
      participant: {
        name: 'Employer 1',
        company: 'Tech Corp',
        avatar: 'E1',
        online: true
      },
      lastMessage: 'Looking forward to working with you!',
      lastMessageTime: '2:30 PM',
      unread: 1,
      gigTitle: 'Frontend Developer Internship'
    },
    {
      id: 2,
      participant: {
        name: 'Employer 2',
        company: 'Design Studio',
        avatar: 'E2',
        online: false
      },
      lastMessage: 'We’ll schedule a meeting soon!',
      lastMessageTime: '1:15 PM',
      unread: 0,
      gigTitle: 'UI/UX Internship'
    }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on('receiveMessage', (msg) => {
      if (selectedChat && msg.chatId === selectedChat.id) {
        setMessages((prev) => [...prev, msg]);
      }
    });
    return () => socket.off('receiveMessage');
  }, [selectedChat]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    const newMessage = {
      chatId: selectedChat.id,
      sender: 'You',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    socket.emit('sendMessage', newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setMessage('');
  };

  return (
    <div className="p-6 h-[calc(100vh-6rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Chat with your employers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversation List */}
        <Card className="lg:col-span-1 h-fit max-h-full overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>

            <div className="overflow-y-auto max-h-96">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => {
                    setSelectedChat(conversation);
                    setMessages([]);
                  }}
                  className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                    selectedChat?.id === conversation.id ? 'bg-muted' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                        <span className="font-semibold text-sm">{conversation.participant.avatar}</span>
                      </div>
                      {conversation.participant.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm truncate">{conversation.participant.name}</h4>
                        <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mb-1">
                        {conversation.participant.company}
                      </p>
                      <p className="text-sm text-muted-foreground truncate mb-2">
                        Re: {conversation.gigTitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate flex-1">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col h-full">
          {selectedChat ? (
            <>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="font-semibold">{selectedChat.participant.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{selectedChat.participant.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedChat.participant.company} •{' '}
                      <span
                        className={selectedChat.participant.online ? 'text-green-600' : 'text-muted-foreground'}
                      >
                        {selectedChat.participant.online ? 'Online' : 'Offline'}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Phone size={16} /></Button>
                  <Button variant="outline" size="sm"><Video size={16} /></Button>
                  <Button variant="outline" size="sm"><MoreVertical size={16} /></Button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}
                        >
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
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
            <div className="flex-1 flex items-center justify-center text-center text-muted-foreground">
              Select a conversation to start chatting
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}