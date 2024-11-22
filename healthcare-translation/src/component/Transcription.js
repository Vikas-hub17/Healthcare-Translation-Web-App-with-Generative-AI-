import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaStop, FaRedo, FaVolumeUp } from 'react-icons/fa';

const Transcription = ({ onTranscribe }) => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const recognitionRef = useRef(null);

  const languages = [
    { code: 'en-US', name: 'English' },
    { code: 'zh-CN', name: 'Mandarin Chinese' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'ar-SA', name: 'Arabic' },
    { code: 'bn-BD', name: 'Bengali' },
    { code: 'pt-BR', name: 'Portuguese' },
    { code: 'ru-RU', name: 'Russian' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'de-DE', name: 'German' },
    { code: 'fr-FR', name: 'French' },
    { code: 'ko-KR', name: 'Korean' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'tr-TR', name: 'Turkish' },
    { code: 'vi-VN', name: 'Vietnamese' },
    { code: 'pl-PL', name: 'Polish' },
    { code: 'nl-NL', name: 'Dutch' },
    { code: 'sv-SE', name: 'Swedish' },
    { code: 'ta-IN', name: 'Tamil' },
    { code: 'th-TH', name: 'Thai' },
  ];

  const startListening = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      setError('Browser doesn’t support speech recognition.');
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
      setError('');
    };

    recognition.onresult = (event) => {
      let currentTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };

    recognition.onerror = (event) => {
      setError(`Error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      onTranscribe(transcript);
    }
  };

  const resetTranscript = () => {
    setTranscript('');
    setError('');
  };

  const playAudio = () => {
    if (!transcript.trim()) {
      setError("There's no transcription to play.");
      return;
    }

    setAudioLoading(true);
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = language;

    utterance.onerror = () => {
      setError('Error during audio playback.');
      setAudioLoading(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setAudioLoading(false);
    };

    setIsPlaying(true);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto sm:max-w-3xl lg:max-w-4xl">
      <h2 className="text-3xl font-semibold text-blue-700 text-center transition-transform transform hover:scale-105">
        Voice-to-Text Transcription
      </h2>

      {error && (
        <p className="text-red-600 text-sm text-center animate-shake">{error}</p>
      )}

      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 justify-center w-full space-y-6 sm:space-y-0">
        {/* Language Selector */}
        <div className="w-full sm:w-1/3">
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="w-full px-6 py-3 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Start Listening Button */}
        <button
          onClick={startListening}
          disabled={listening}
          className={`w-full sm:w-1/4 px-6 py-1 rounded-lg font-medium text-white transition-all duration-200 ${listening ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} flex items-center justify-center`}
        >
          <FaMicrophone className="mr-2 text-xl" />
          {listening ? 'Listening...' : 'Start Listening'}
        </button>

        {/* Stop Listening Button */}
        <button
          onClick={stopListening}
          disabled={!listening}
          className="w-full sm:w-1/4 px-6 py-1 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all ease-in-out duration-200 flex items-center justify-center"
        >
          <FaStop className="mr-2 text-xl" />
          Stop
        </button>

        {/* Reset Button */}
        <button
          onClick={resetTranscript}
          className="w-full sm:w-1/4 px-6 py-1 rounded-lg font-medium text-white bg-gray-400 hover:bg-gray-500 transition-all ease-in-out duration-200 flex items-center justify-center"
        >
          <FaRedo className="mr-2 text-xl" />
          Reset
        </button>
      </div>

      {/* Transcript Display with Highlighting */}
      <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Transcript:</h3>
        <p className={`text-lg text-gray-700 ${audioLoading ? 'animate-pulse' : ''}`}>
          {transcript || "No transcription yet..."}
        </p>
      </div>

      {/* Play Audio Button with Loading Spinner */}
      <div className="flex justify-center mt-4">
        <button
          onClick={playAudio}
          disabled={!transcript.trim() || audioLoading}
          className={`px-6 py-3 font-medium text-white rounded-lg flex items-center justify-center transition-all duration-200 ${audioLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'}`}
        >
          {audioLoading ? (
            <div className="animate-spin mr-2">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 12v1m9-9h-1m-12 0H3m7-7l-.707-.707M4.707 4.707l-.707.707M19.293 19.293l-.707-.707M19.293 4.707l-.707.707"
                />
              </svg>
            </div>
          ) : (
            <FaVolumeUp className="mr-2 text-xl" />
          )}
          Play Audio
        </button>
      </div>
    </div>
  );
};

export default Transcription;
