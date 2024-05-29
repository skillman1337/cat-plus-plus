## Cat++: Your AI-Powered C++ Playground 🐈💻

Cat++ is an open-source project that leverages the power of Google's Gemini AI to generate interactive and responsive C++ tutorials, all within a sleek Next.js environment.

**Tired of dry, boring C++ tutorials?** Cat++ injects life into learning by creating engaging chapters filled with:

- **Clear explanations:** Complex concepts broken down into bite-sized pieces.
- **Real-world examples:** See how C++ is used in practical scenarios.
- **Interactive quizzes:** Test your knowledge and solidify your understanding.
- **Code challenges:** Put your skills to the test with hands-on exercises.
- **Visually appealing & Responsive design:** Learn in a clean and modern environment that adapts seamlessly to any screen size.

### How it Works

Cat++ uses two main scripts:

1. **`generate-topics`:** This script calls upon Gemini to create a structured JSON file (`topics.json`) outlining the C++ curriculum.
   - **Customization:** Edit the prompt in `scripts/generateTopics.js` to control the topics and structure of your C++ course. Want to focus on memory management, object-oriented programming, or game development? Gemini can handle it!
2. **`generate-content`:** This script reads `topics.json` and, for each chapter, instructs Gemini to generate a complete Next.js React component. These components are filled with explanations, code examples, quizzes, and more!
   - **Customization:** Tweak the prompt in `scripts/generateContent.js` to fine-tune the content generation process. Experiment with different tones, teaching styles, and levels of detail.

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cat-plus-plus.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up your API key:**
   - Create a `.env` file in the root directory.
   - Obtain your API key from the Google Cloud Platform Console.
   - Add the following line to your `.env` file:
     ```
     API_KEY=your_api_key_here
     ```
4. **Generate your C++ curriculum:**
   ```bash
   npm run generate-topics
   ```
5. **Generate the tutorial content:**
   ```bash
   npm run generate-content
   ```
6. **Start the development server:**
   ```bash
   npm run dev
   ```

### Contributing

We welcome contributions from the community! Feel free to open issues, submit pull requests, or share your ideas. Let's make Cat++ the purr-fect C++ learning resource! 😸

### License

This project is licensed under the MIT License.
