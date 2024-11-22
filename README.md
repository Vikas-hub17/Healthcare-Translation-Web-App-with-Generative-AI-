# Healthcare Translation Web App with Generative AI

## Project Overview
The Healthcare Translation Web App is a prototype designed to bridge communication gaps in multilingual healthcare settings. It leverages generative AI to provide real-time voice-to-text transcription, translation, and audio playback. The application aims to enhance interactions between patients and healthcare providers by enabling seamless multilingual communication.

![Screenshot 2024-11-22 195428](https://github.com/user-attachments/assets/a3215015-d926-4599-a0c9-ff8eb9bab1f5)

![Screenshot 2024-11-22 195435](https://github.com/user-attachments/assets/f5a6437f-1567-4817-8768-e7127925428c)

---

## Features

### 1. Voice-to-Text Transcription
- Converts spoken language into text in real-time.
- Supports multiple input languages.

### 2. Real-Time Translation
- Translates text into the target language instantly.
- Includes support for a wide range of languages commonly used in healthcare settings.

### 3. Audio Playback
- Converts translated text into audio for playback.
- Ensures accessibility for patients with reading difficulties.

### 4. Mobile-First Design
- Fully responsive design optimized for mobile devices.
- Cross-platform compatibility (mobile, tablet, desktop).

### 5. Data Privacy
- Basic security measures to ensure sensitive data is handled securely.
- Local data processing to minimize risk.

---

## Technologies Used

### Frontend
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Features:** Server-side rendering (SSR) and static generation for enhanced performance and SEO.

### Generative AI
- Integrates APIs for transcription, translation, and text-to-speech capabilities.
---

## Installation and Setup

### Prerequisites
- npm or yarn package manager
- Vercel account for deployment (optional)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Vikas-hub17/healthcare-translation-web-app.git
   cd healthcare-translation-web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables: (optional)
   - Create a `.env.local` file in the root directory.
   - Add the following keys:
     ```env
     NEXT_PUBLIC_AI_API_KEY=<your-api-key>
     NEXT_PUBLIC_AI_BASE_URL=<ai-service-url>
     ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage Guide

1. **Start the App:**
   - Open the application on your device.

2. **Transcription:**
   - Use the microphone button to speak your input language.
   - View the real-time transcription on the screen.

3. **Translation:**
   - Select your target language from the dropdown menu.
   - The text is translated instantly.

4. **Audio Playback:**
   - Click the "Play" button to listen to the translated text.

5. **Responsive Navigation:**
   - The UI adapts seamlessly to all screen sizes.

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with clear messages.
   ```bash
   git commit -m "Add new feature: feature-name"
   ```
4. Push your branch and create a pull request.
   ```bash
   git push origin feature-name
   ```

---

## Troubleshooting

### Common Issues
- **Environment Variables Not Set:** Ensure `.env.local` is correctly configured.
- **API Errors:** Check your AI API key and base URL.

### Debugging Tips
- Use browser developer tools to inspect network requests and console logs.
- Check the terminal for server-side error logs.

---

## Future Enhancements
- Integration with Electronic Health Record (EHR) systems.
- Offline mode for transcription and translation.
- Enhanced data encryption for sensitive communication.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- Generative AI tools for powering the transcription, translation, and text-to-speech features.
- Open-source libraries and frameworks for enabling rapid development.

---

## Contact
For any inquiries or feedback, please contact:
- **Email:** vikasraw17@gmail.com
- **GitHub:** [Your GitHub Profile](https://github.com/Vikas-hub17)
