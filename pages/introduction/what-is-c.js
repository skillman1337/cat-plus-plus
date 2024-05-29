import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const WhatIsCpp = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="What is C++?: A Powerful Tool for Your Programming Journey">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        What is C++?: A Powerful Tool for Your Programming Journey
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're a builder, but instead of bricks and mortar, you're
        using code to create amazing software. That's what C++ empowers you to
        do! It's a powerful programming language used to build everything from
        fast and efficient operating systems to visually stunning video games.
        Ready to put on your coding hardhat? Let's dive in!
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  std::cout << "Hello, world!" << std::endl;
  return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        This simple code snippet is your first step in the world of C++. Let's
        break it down: <code className="font-bold text-lg text-red-400">#include &lt;iostream&gt;</code> is like grabbing your
        tools - it brings in the 'iostream' library, which allows us to
        interact with the console. <code className="font-bold text-lg text-red-400">int main()</code> is the heart of
        your program - it's the starting point where your code execution
        begins. 
        <br/>
        <code className="font-bold text-lg text-red-400">std::cout &lt;&lt; "Hello, world!" &lt;&lt; std::endl;</code> tells the computer to print "Hello, world!" to the console. Think of it like using a loudspeaker to announce your message to the world! 🌎 Finally, <code className="font-bold text-lg text-red-400">return 0;</code> signals that the program ran successfully.
      </p>

      <p>Explanation using -&gt; &lt;- has to be escaped: &gt; &lt;</p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Make it Personal!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Now it's your turn! Modify the code to display your name instead of
        "Hello, world!". 
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
          Hint: Remember that you need to modify the text within the quotation
          marks. 😉
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>

int main() {
  std::cout << "Hello, [Your Name]!" << std::endl; 
  return 0;
}`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>What library is used for console output in C++?</li>
        <li>
          What is the purpose of the <code className="font-bold text-lg text-red-400">main()</code> function?
        </li>
        <li>
          What does <code className="font-bold text-lg text-red-400">std::endl</code> represent in the code?
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
          <p>1. The 'iostream' library is used for console output.</p>
          <p>
            2. The <code className="font-bold text-lg text-red-400">main()</code> function is the entry point of a C++ program, where
            the execution begins.
          </p>
          <p>
            3. <code className="font-bold text-lg text-red-400">std::endl</code> inserts a newline character, moving the output to
            the next line.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default WhatIsCpp;