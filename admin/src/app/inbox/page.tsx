"use client"

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import SideBar from '../../Components/SideBar';

function App() {
  const [clicked,setClicked]=useState(true)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:3000'); // Connect to the backend server

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    
    <div style={{display:'flex'}}>
      <SideBar setClicked={setClicked} clicked={clicked} />
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
