import React from 'react';

const AudioPlayback = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>Audio Playback</h2>
      <button onClick={speak} disabled={!text}>
        Speak
      </button>
    </div>
  );
};

export default AudioPlayback;
