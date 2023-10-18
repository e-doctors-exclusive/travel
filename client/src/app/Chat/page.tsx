import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Array<string>>([]);
  const socket = io('http://localhost:3001'); // Connect to the backend server

  useEffect(() => {
    socket.on('message', (data:any) => {
      setMessages([...messages,data]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

// export {}
