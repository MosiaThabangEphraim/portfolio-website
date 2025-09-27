import React, { useState, useEffect, useRef } from 'react';
import './ClickSpeedGame.css';

function ClickSpeedGame() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef(null);

  // Load high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('clickSpeedHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Create audio context for sound effect
  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    audioRef.current = audioContext;
  }, []);

  // Play click sound effect
  const playClickSound = () => {
    if (audioRef.current) {
      const oscillator = audioRef.current.createOscillator();
      const gainNode = audioRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioRef.current.destination);

      oscillator.frequency.setValueAtTime(800, audioRef.current.currentTime);
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0.1, audioRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioRef.current.currentTime + 0.1
      );

      oscillator.start(audioRef.current.currentTime);
      oscillator.stop(audioRef.current.currentTime + 0.1);
    }
  };

  // Start the game
  const startGame = () => {
    setGameActive(true);
    setGameStarted(true);
    setCurrentScore(0);
    setTimeLeft(10);
  };

  // Handle click
  const handleClick = () => {
    if (!gameActive) return;

    playClickSound();
    setCurrentScore((prev) => prev + 1);
  };

  // Timer countdown
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      // Game over
      setGameActive(false);
      if (currentScore > highScore) {
        setHighScore(currentScore);
        localStorage.setItem('clickSpeedHighScore', currentScore.toString());
      }
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  // Play again
  const playAgain = () => {
    setGameActive(false);
    setGameStarted(false);
    setCurrentScore(0);
    setTimeLeft(10);
  };

  return (
    <div className="click-game-container">
      <div className="game-header">
        <h3 className="game-title">⚡ Click Speed Challenge</h3>
        <p className="game-description">
          Click as fast as you can in 10 seconds!
        </p>
        <p className="game-fun-indicator">🎮 Just for fun!</p>
      </div>

      <div className="game-stats">
        <div className="stat-item">
          <span className="stat-label">Current Score:</span>
          <span className="stat-value">{currentScore}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">High Score:</span>
          <span className="stat-value">{highScore}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Time Left:</span>
          <span className="stat-value">{timeLeft}s</span>
        </div>
      </div>

      <div className="game-area">
        {!gameStarted ? (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        ) : (
          <button
            className={`click-btn ${gameActive ? 'active' : 'inactive'}`}
            onClick={handleClick}
            disabled={!gameActive}
          >
            {gameActive ? 'CLICK ME!' : 'Game Over!'}
          </button>
        )}
      </div>

      {gameStarted && !gameActive && (
        <div className="game-results">
          <div className="final-score">
            <h4>Final Score: {currentScore}</h4>
            {currentScore === highScore && currentScore > 0 && (
              <p className="new-record">🎉 New High Score!</p>
            )}
          </div>
          <button className="play-again-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default ClickSpeedGame;
