import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';


const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:1128');
    setSocket(newSocket);

    // newSocket.on('connect', () => {
    //   newSocket.emit('get message history');
    // });

    newSocket.on('connect_error', (err) => {
      setError('Failed to connect to the server. Please try again later.');
      console.error(err);
    });

    newSocket.on('message', (message: string) => {
      setMessages((messages) => [...messages, message]);
    });

    // newSocket.on('message history', (pastMessages: string[]) => {
    //   setMessages(pastMessages);
    // });

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {error && <p className="error-message">{error}</p>}
      <div className="messages-container">
        {messages.map((message, index) => (
          <p key={index} className="message">{message}</p>
        ))}
      </div>
      <div className="input-container">
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="input-field" />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;
