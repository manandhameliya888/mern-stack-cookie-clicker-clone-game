import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');
  const [prizes, setPrizes] = useState(0);

  const handleStart = async () => {
    if (!username) {
      alert('Please enter a username to start the game');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      setMessage(data.message);
      setScore(data.user.totalScore);
      setPrizes(data.user.prizes);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the backend');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker Clone</h1>
        <div className='wrapper'>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Click Me!
          </motion.button>
        </div>
        {message && <p>{message}</p>}
        {score !== null && (
          <div>
            <p>Total Score: {score}</p>
            <p>Prizes Won: {prizes}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
