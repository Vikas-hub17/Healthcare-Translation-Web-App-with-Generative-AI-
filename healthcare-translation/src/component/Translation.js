import React, { useState } from 'react';
import axios from 'axios';

const Translation = ({ transcript, targetLanguage }) => {
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: `Translate this into ${targetLanguage}: ${transcript}`,
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      setTranslation(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Translation error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Translation</h2>
      <button onClick={translateText} disabled={loading || !transcript}>
        Translate
      </button>
      {loading ? <p>Translating...</p> : <p>{translation}</p>}
    </div>
  );
};

export default Translation;
