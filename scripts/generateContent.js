require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const generationConfig = {
  maxOutputTokens: 8192, // Adjust as needed
  temperature: 0, // Adjust for creativity (0.0 - 1.0)
};
const safetySettings = [
  { category: "HARM_CATEGORY_UNSPECIFIED", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DEROGATORY", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_TOXICITY", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_VIOLENCE", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_SEXUAL", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_MEDICAL", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DANGEROUS", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
];

const generateChapterContent = async (topic, chapter) => {
  const model = genAI.getGenerativeModel(
    { model: "gemini-1.5-pro" },
    generationConfig,
    safetySettings
  );

  const formattedChapterTitle =
    chapter.charAt(0).toUpperCase() + chapter.slice(1);

  const prompt = `Generate a Next.js React component for a C++ tutorial chapter on "${formattedChapterTitle}" within the topic of "${topic}". 

  **Component Structure:**

  \`\`\`javascript
  import { React, useState } from "react";
  import Layout from "../../components/Layout";
  import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
  import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

  const ${formattedChapterTitle.replace(/\s/g, "")} = () => {
    const [showQuizSolution, setShowQuizSolution] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
  
    return (
      <Layout title="${formattedChapterTitle}: [Add a catchy and descriptive subtitle here]">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
          ${formattedChapterTitle}: [Add a catchy and descriptive subtitle here]
        </h1>

        {/* Introduction */}
        <p className="mb-4 text-lg leading-relaxed">
          [Start with an engaging introduction to the topic. Use analogies, real-world examples, and a conversational tone to make it relatable.]
        </p>

        {/* Code Example (if applicable) */}
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
        {\`// [Insert relevant and well-commented C++ code example here]\`}
        </SyntaxHighlighter>

        {/* Explanation */}
        <p className="mb-4 text-lg leading-relaxed">
          [Explain the code example clearly and concisely. Break down complex concepts into smaller, easier-to-understand chunks.]
          [Mark down for code in explanation (not SyntaxHighligter) <code className="font-bold text-lg text-red-400">std::endl</code>]
        </p>

        <p>[Please make sure you escape -> <- for-example: &gt; &lt;]</p>

        {/* More content, explanations, code examples as needed... */}

        <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
          Task: [Insert an interesting task]
        </h2>

        <p className="mb-4 text-lg leading-relaxed">
          [Explain the task]
        </p>

        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition duration-300"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
        </div>

        {showHint && (
          <p className="mb-4 text-lg leading-relaxed bg-gray-800 p-4 rounded">
            Hint: [Insert hint]
          </p>
        )}

        {showSolution && (
          <SyntaxHighlighter
            language="cpp"
            style={atomOneDarkReasonable}
            className="rounded mb-6"
          >
            {\`#include <iostream>
  int main() {
    std::cout << "Meow, world!"; 
    return 0;
  }\`}
          </SyntaxHighlighter>
        )}

        {/* Quiz Time! */}
        <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
          Quiz Time! 
        </h2>

        <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
          <li>
            [Quiz question 1]
          </li>
          <li>
            [Quiz question 2]
          </li>
          <li>
            etc...
          </li>
        </ul>

        {/* Solution Button */}
        <button
          onClick={() => setShowQuizSolution(!showQuizSolution)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 mb-5"
        >
          {showQuizSolution ? "Hide Solutions" : "Show Solutions"}
        </button>

        {/* Solutions */}
        {showQuizSolution && (
          <div className="bg-gray-800 p-4 rounded mb-6 text-lg leading-relaxed">
            <p>
              [Quiz solution 1]
            </p>
            <p>
              [Quiz solution 2]
            </p>
            <p>
              etc...
            </p>
          </div>
        )}

      </Layout>
    );
  };

  export default ${formattedChapterTitle.replace(/\s/g, "")};
  \`\`\`

  **Content Guidelines:**

  - **Engaging and Conversational:** Write as if you're explaining the concept to a friend. Use humor, analogies, and real-world examples to make it fun and relatable.
  - **Clear and Concise:** Explain concepts in a straightforward manner, avoiding jargon and technical terms whenever possible.
  - **Visually Appealing:** Use headings, subheadings, bullet points, and code highlighting to break up the text and make it easier to read.
  - **Interactive Elements:** Include quizzes, exercises, or interactive code examples to keep the learner engaged.
  - **Tailwind CSS:** Use Tailwind CSS classes for styling to ensure a consistent and visually appealing design.
  - **Emojis:** Use emojis sparingly to add personality and visual interest.

  **Important:**

  - Provide clear and concise explanations.
  - Use relevant and well-commented code examples.
  - Ensure the generated code is syntactically correct and functional.
  - Follow the provided component structure and content guidelines.

  Make sure the generated Javascript is valid. Do not include any markdown formatting
  `;

  const formatChapterPath = (chapter) => {
    return chapter
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let componentCode = response.text();

    // Create the chapter file
    const chapterPath = `pages/${topic.category}/${formatChapterPath(
      chapter
    )}.js`;

    componentCode = componentCode.replace(/```javascript\n?|\n?```/g, "");
    fs.writeFileSync(chapterPath, componentCode);

    console.log(`Generated: ${chapterPath}`);
  } catch (error) {
    console.error(
      `Error generating content for ${topic.title} - ${chapter}:`,
      error
    );
  }
};

const generateContent = async () => {
  try {
    const topicsData = fs.readFileSync("public/topics.json", "utf-8");
    const topics = JSON.parse(topicsData);

    for (const topic of topics) {
      // Create the category folder if it doesn't exist
      const categoryFolderPath = `pages/${topic.category}`;
      if (!fs.existsSync(categoryFolderPath)) {
        fs.mkdirSync(categoryFolderPath);
      }

      for (const chapter of topic.chapters) {
        await generateChapterContent(topic, chapter);
      }
    }

    console.log("Content generation complete!");
  } catch (error) {
    console.error("Error reading topics.json or generating content:", error);
  }
};

generateContent();
