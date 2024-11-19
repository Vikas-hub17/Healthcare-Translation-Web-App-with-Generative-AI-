import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Transcription = ({ onTranscribe }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Browser doesn't support speech recognition.</p>;
  }

  const handleStartListening = () => SpeechRecognition.startListening({ continuous: true });
  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    onTranscribe(transcript);
  };

  return (
    <div>
      <h2>Voice-to-Text Transcription</h2>
      <button onClick={handleStartListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={handleStopListening} disabled={!listening}>
        Stop Listening
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Transcription;
