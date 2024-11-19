import React, { useState } from 'react';
import Transcription from './components/Transcription';
import Translation from './components/Translation';
import AudioPlayback from './components/AudioPlayback';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  const [transcript, setTranscript] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Healthcare Translation Web App</h1>
      <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <Transcription onTranscribe={setTranscript} />
      <Translation transcript={transcript} targetLanguage={selectedLanguage} />
      <AudioPlayback text={transcript} />
    </div>
  );
};

export default App;
