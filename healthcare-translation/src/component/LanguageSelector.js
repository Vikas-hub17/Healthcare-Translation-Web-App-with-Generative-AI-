import React from 'react';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  return (
    <div>
      <h2>Select Language</h2>
      <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
