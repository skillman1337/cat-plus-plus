## Cat++: Exploring the Future of C++ Education with AI 

Cat++ is an open-source project that pushes the boundaries of what's possible in C++ education. By harnessing the power of Google's Gemini AI and the flexibility of Next.js, Cat++ aims to create a more engaging and personalized learning experience. 

**While still in its early stages, Cat++ offers a glimpse into a future where AI tailors educational content to individual needs:**

- **Dynamic Content Generation:** Cat++ leverages Gemini's advanced language processing capabilities to generate explanations, code examples, quizzes, and even interactive challenges, all adapted to the specific topics and learning objectives you define.
- **Customizable Curriculum:**  Define your own learning path by providing prompts that dictate the structure and content of your C++ course.  Focus on specific areas like memory management, object-oriented programming, or advanced algorithms – the possibilities are vast.
- **Intuitive Learning Environment:**  Cat++'s responsive design ensures a seamless experience across devices, while its clean and modern interface keeps the focus on what matters most: learning C++ effectively.

### A Proof-of-Concept with Potential

It's important to note that Cat++ is currently a proof-of-concept. While Gemini exhibits impressive capabilities, the generated code and content may not always be perfect.  However, as AI technology advances, we can expect significant improvements in accuracy, sophistication, and the overall learning experience.

### How Cat++ Works

The project revolves around two core scripts:

1. **`generate-topics`:** This script interacts with Gemini to create a structured `topics.json` file based on your input. This file serves as the blueprint for your C++ curriculum.
   - **Customization is Key:**  Modify the prompt in `scripts/generateTopics.js` to shape the structure and content of your course. 
2. **`generate-content`:** This script processes `topics.json` and instructs Gemini to generate corresponding Next.js React components for each chapter, complete with explanations, code examples, quizzes, and more.
   - **Fine-Tune the Output:**  Experiment with the prompt in `scripts/generateContent.js` to influence the tone, teaching style, and level of detail in the generated content.

### Getting Started with Cat++

1. **Clone the repository:**
   ```bash
   git clone https://github.com/skillman1337/cat-plus-plus.git
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

### A Glimpse into the Future

Cat++ represents an exciting step towards a future where AI personalizes education and makes learning complex subjects like C++ more accessible and engaging. While still under development, the project showcases the potential of AI to transform how we learn and teach.

### Join the Exploration

We encourage you to explore Cat++, experiment with its capabilities, and contribute to its development.  Together, we can shape the future of C++ education.

### License

This project is licensed under the MIT License. 
