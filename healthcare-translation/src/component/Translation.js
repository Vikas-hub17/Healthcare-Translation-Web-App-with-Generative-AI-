import React, { useState, useRef } from "react";
import translate from "translate";

const Translation = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  translate.engine = "google";
  translate.key = null;

  const medicalDictionary = {
    // Abbreviations
    "bp": "blood pressure",
    "ct": "computed tomography",
    "ecg": "electrocardiogram",
    "xr": "x-ray",
    "uticaria": "urticaria",
    "pneumon": "pneumonia",
    "htn": "hypertension",
    "dvt": "deep vein thrombosis",
    "sepsis": "sepsis",
    "tachycardia": "tachycardia",
    "bradycardia": "bradycardia",
    "copd": "chronic obstructive pulmonary disease",
    "copd exacerbation": "chronic obstructive pulmonary disease exacerbation",
    "ivf": "intravenous fluids",
    "ct scan": "computed tomography scan",
    "mri": "magnetic resonance imaging",
    "usg": "ultrasound",
    "cbc": "complete blood count",
    "stemi": "ST-elevation myocardial infarction",
    "nsaid": "nonsteroidal anti-inflammatory drugs",
    "rbc": "red blood cells",
    "wbc": "white blood cells",
    "ecmo": "extracorporeal membrane oxygenation",
    "dx": "diagnosis",
    "rx": "prescription",
    "sats": "saturation",
    "o2": "oxygen",
    "bpm": "beats per minute",
    "er": "emergency room",
    "icu": "intensive care unit",
    "opd": "outpatient department",
    "pmh": "past medical history",
    "adhd": "attention deficit hyperactivity disorder",
    "anxiety disorder": "generalized anxiety disorder",
    "depression": "major depressive disorder",
    "insomnia": "insomnia",
    "ptsd": "post-traumatic stress disorder",
    "schizo": "schizophrenia",
    "asd": "atrial septal defect",
    "copd": "chronic obstructive pulmonary disease",
    "mi": "myocardial infarction",
    "stroke": "stroke",
    "tpa": "tissue plasminogen activator",
    "cva": "cerebrovascular accident",
    "tiia": "transient ischemic attack",
    "lv": "left ventricle",
    "rv": "right ventricle",
    "cns": "central nervous system",
    "pns": "peripheral nervous system",
    "adh": "antidiuretic hormone",
    "ls": "lumbar spine",
    "ms": "multiple sclerosis",
    "hb": "hemoglobin",
    "hct": "hematocrit",
    "hba1c": "hemoglobin A1c",
    "sodium": "sodium",
    "potassium": "potassium",
    "glucose": "glucose",
    "chol": "cholesterol",
    "ca": "calcium",
    "p": "phosphorus",
    "ketoacidosis": "diabetic ketoacidosis",
    "htn": "hypertension",
    "bp": "blood pressure",
    "bradycardia": "bradycardia",
    "arrhythmia": "arrhythmia",
    "asthma": "asthma",
    "copd": "chronic obstructive pulmonary disease",
    "pe": "pulmonary embolism",
    "utis": "urinary tract infections",
    "stemi": "ST-elevation myocardial infarction",
    "abg": "arterial blood gas",
    "csf": "cerebrospinal fluid",
    "spine": "spinal cord",
    "liver cirrhosis": "cirrhosis of the liver",
    "pancreatitis": "pancreatitis",
    "appendectomy": "appendectomy",
    "gallbladder": "gallbladder",
    "tonsillectomy": "tonsillectomy",
    "colonoscopy": "colonoscopy",
    "vte": "venous thromboembolism",
    "cpr": "cardiopulmonary resuscitation",
    "fibrillation": "fibrillation",
    "electrolytes": "electrolytes",
    "asthma": "asthma",
    "cystitis": "cystitis",
    "urinary tract infection": "urinary tract infection",
    "bph": "benign prostatic hyperplasia",
    "pneumonia": "pneumonia",
    "nephritis": "nephritis",
    "dka": "diabetic ketoacidosis",
    "mi": "myocardial infarction",
    "avf": "arteriovenous fistula",
    "vdd": "ventricular diastolic dysfunction",
    "pe": "pulmonary embolism",
    "dm": "diabetes mellitus",
    "copd": "chronic obstructive pulmonary disease",
    "ivf": "in vitro fertilization",
    "fev1": "forced expiratory volume in one second",
    "tlc": "total lung capacity",
    "bmi": "body mass index",
    "fdp": "fibrin degradation products",
    "fbs": "fasting blood sugar",
    "cns": "central nervous system",
    "gfr": "glomerular filtration rate",
    "cts": "cervical thoracic syndrome",
    "abd": "abdomen",
    "gmfcs": "gross motor function classification system",
    "re": "retinopathy",
    "le": "lower extremity",
    "urology": "urology",
    "diabetes": "diabetes",
    "cns": "central nervous system",
    "acs": "acute coronary syndrome",
    "ta": "tuberculosis antigen",
    "tb": "tuberculosis",
    "std": "sexually transmitted disease",
    "ekg": "electrocardiogram",
    "spinal cord": "spinal cord",
    "skull": "skull",
    "hip": "hip",
    "ankle": "ankle",
    "wrist": "wrist",
    "elbow": "elbow",
    "shoulder": "shoulder",
    "dysphagia": "difficulty swallowing",
    "dyspnea": "difficulty breathing",
    "tachypnea": "rapid breathing",
    "bradypnea": "slow breathing",
    "cholecystectomy": "cholecystectomy",
    "bowel obstruction": "bowel obstruction",
    "renal": "renal",
    "tsh": "thyroid stimulating hormone",
    "hiv": "human immunodeficiency virus",
    "aids": "acquired immunodeficiency syndrome",
    "hbv": "hepatitis B virus",
    "hcv": "hepatitis C virus",
    "hiv": "human immunodeficiency virus",
    "sars": "severe acute respiratory syndrome",
    "covid": "coronavirus disease",
    "icd": "implantable cardioverter-defibrillator",
    "ceph": "cephalexin",
    "levaquin": "levofloxacin",
    "penicillin": "penicillin",
    "doxycycline": "doxycycline",
    "amoxicillin": "amoxicillin",
    "augmentin": "amoxicillin/clavulanate",
    "zithromax": "azithromycin",
    "bactrim": "trimethoprim-sulfamethoxazole",
    "bacteroides": "bacteroides",
    "blood culture": "blood culture",
    "urine culture": "urine culture",
    "pt": "prothrombin time",
    "inr": "international normalized ratio",
    "pft": "pulmonary function test",
    "npo": "nothing by mouth",
    "nurse": "nurse",
    "pt": "physical therapy",
    "ot": "occupational therapy",
    "mri": "magnetic resonance imaging",
    "ecg": "electrocardiogram",
    "ct": "computed tomography",
    "ultrasound": "ultrasound",
    "x-ray": "x-ray",
    "skin": "skin",
    "fistula": "fistula",
    "edema": "edema",
    "tumor": "tumor",
    "neoplasm": "neoplasm",
    "ulcer": "ulcer",
    "infection": "infection",
    "fever": "fever",
    "pain": "pain",
    "surgery": "surgery",
    "hemorrhage": "hemorrhage",
    "wound": "wound",
    "vaccine": "vaccine",
    "bacteria": "bacteria",
    "fungus": "fungus",
    "virus": "virus",
    "parasitic infection": "parasitic infection",
    "sepsis": "sepsis",
    "allergy": "allergy",
    "obesity": "obesity",
    "leukemia": "leukemia",
    "fibromyalgia": "fibromyalgia",
    "cancer": "cancer",
    "breast cancer": "breast cancer",
    "prostate cancer": "prostate cancer",
    "colorectal cancer": "colorectal cancer",
    "stomach cancer": "stomach cancer",
    "liver cancer": "liver cancer",
    "pancreatic cancer": "pancreatic cancer",
    "lung cancer": "lung cancer",
  };

  // Function to correct medical terms
  const correctMedicalTerms = (text) => {
    let correctedText = text;
    for (const [abbreviation, fullTerm] of Object.entries(medicalDictionary)) {
      const regex = new RegExp(`\\b${abbreviation}\\b`, "gi");
      correctedText = correctedText.replace(regex, fullTerm);
    }
    return correctedText;
  };

  const handleTranslation = async () => {
    if (!inputText.trim()) {
      setError("Please provide text for translation.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const translated = await translate(inputText, {
        from: sourceLanguage,
        to: targetLanguage,
      });
      setTranslatedText(translated);
    } catch (err) {
      setError("Failed to translate text. Please try again.");
      console.error("Translation Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeechToText = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      setError("Speech recognition is not supported in your browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = sourceLanguage;

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setError("");
      alert("Listening... Speak now.");
      setIsListening(true);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        transcript += result[0].transcript;
      }
      // Correct medical terms in the transcription
      const correctedTranscript = correctMedicalTerms(transcript);
      setInputText(correctedTranscript);
    };

    recognition.onerror = (event) => {
      setError(
        `Speech recognition error: ${event.error || "An unknown error occurred."}`
      );
      recognition.stop();
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch (err) {
      setError("Unable to start speech recognition. Please try again.");
      console.error("Speech Recognition Start Error:", err);
    }
  };

  const stopListening = () => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Function to split and playback long texts
  const handleAudioPlayback = () => {
    if (!translatedText.trim()) {
      setError("No translated text available for playback.");
      return;
    }

    try {
      const sentences = translatedText.match(/[^.!?]+[.!?]+/g) || [translatedText];
      const playNextSentence = (index) => {
        if (index >= sentences.length) return;

        const utterance = new SpeechSynthesisUtterance(sentences[index]);
        utterance.lang = targetLanguage;

        utterance.onend = () => playNextSentence(index + 1);

        utterance.onerror = () => {
          setError("An error occurred during audio playback.");
        };

        speechSynthesis.speak(utterance);
      };

      playNextSentence(0);
    } catch (err) {
      setError("Unable to start audio playback. Please try again.");
      console.error("Audio Playback Error:", err);
    }
  };

  const handleReset = () => {
    setInputText("");
    setTranslatedText("");
    setSourceLanguage("en");
    setTargetLanguage("es");
    setError("");
    setIsListening(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "Chinese (Mandarin)" },
    { code: "es", name: "Spanish" },
    { code: "hi", name: "Hindi" },
    { code: "ar", name: "Arabic" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "de", name: "German" },
    { code: "fr", name: "French" },
    { code: "ko", name: "Korean" },
    { code: "it", name: "Italian" },
    { code: "tr", name: "Turkish" },
    { code: "vi", name: "Vietnamese" },
    { code: "pl", name: "Polish" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Healthcare Translation
      </h1>

      <div className="mb-6">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text to translate or use speech-to-text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
        <div>
          <label htmlFor="source-lang" className="block text-sm text-gray-700 mb-1">
            Source Language:
          </label>
          <select
            id="source-lang"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="target-lang" className="block text-sm text-gray-700 mb-1">
            Target Language:
          </label>
          <select
            id="target-lang"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          className="w-full sm:w-auto py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
          onClick={handleSpeechToText}
        >
          Start Listening
        </button>

        <button
          className="w-full sm:w-auto py-3 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
          onClick={stopListening}
          disabled={!isListening}
        >
          Stop Listening
        </button>

        <button
          className={`w-full sm:w-auto py-3 px-6 text-white font-semibold rounded-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          }`}
          onClick={handleTranslation}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-center mb-6">
          <strong>Error:</strong> {error}
        </p>
      )}

      {/* Original Text Section */}
      {inputText && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Original Text</h3>
          <p className="text-lg text-gray-700">{inputText}</p>
        </div>
      )}

      {/* Translated Text Section */}
      {translatedText && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Translated Text</h3>
          <p className="text-lg text-gray-700">{translatedText}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
      <button
        className="w-full sm:w-auto py-3 px-6 mt-8 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
        onClick={handleReset}
      >
        Reset
      </button>
      
      <button
          className="w-full sm:w-auto py-3 px-6 mt-8 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-300"
          onClick={handleAudioPlayback}
          disabled={!translatedText.trim()}
        >
          Speak
        </button>
        </div>
    </div>
  );
};

export default Translation;
