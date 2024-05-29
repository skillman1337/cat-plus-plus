import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MemoryOrganizationandRepresentation = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Memory Organization and Representation: Unlocking the Computer's Mind">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Memory Organization and Representation: Unlocking the Computer's Mind
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine a vast warehouse meticulously organized with shelves, boxes,
        and labels. That's how a computer's memory works! 🧠 It's a
        highly structured system for storing everything from your favorite
        cat videos to complex game logic. In this chapter, we'll dive deep
        into the fascinating world of memory organization and representation
        in C++. Get ready to unlock the secrets of how computers manage
        data! 🔓
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  int age = 25; // Variable declaration and initialization
  std::cout << "The variable 'age' is stored at memory address: " 
            << &age << std::endl;
  return 0;
}
`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this simple example, we declare an integer variable <code className="font-bold text-lg text-red-400">age</code> and assign it the value 25. 
        The <code className="font-bold text-lg text-red-400">&</code> operator gives us the memory address where the variable
        <code className="font-bold text-lg text-red-400">age</code> is stored. Run this code, and you'll see a unique hexadecimal
        number representing the memory location. This demonstrates how variables
        occupy specific places in memory.
      </p>

      <p>Explanation using -&gt; &lt;- has to be escaped: &gt; &lt;</p>

      {/* More content, explanations, code examples as needed... */}
      <p className="mb-4 text-lg leading-relaxed">
        C++ provides different data types, each with its own memory
        requirements and representation. For instance, an <code className="font-bold text-lg text-red-400">int</code> usually occupies 4 bytes
        (32 bits) of memory, while a <code className="font-bold text-lg text-red-400">char</code> takes 1 byte. Understanding how data is
        represented in memory is crucial for efficient programming and
        debugging. 🤔
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Exploring Memory Addresses 🗺️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's get hands-on! Write a C++ program that declares variables
        of different data types (int, char, float, double) and prints
        their memory addresses. Observe the addresses and see if you can
        spot any patterns or relationships.
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
          Hint: Remember to use the <code className="font-bold text-lg text-red-400">&</code> operator to get the memory address
          of a variable.
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
  int num = 10;
  char letter = 'A';
  float pi = 3.14f;
  double bigNumber = 12345.6789;

  std::cout << "Memory address of 'num': " << &num << std::endl;
  std::cout << "Memory address of 'letter': " << &letter << std::endl;
  std::cout << "Memory address of 'pi': " << &pi << std::endl;
  std::cout << "Memory address of 'bigNumber': " 
            << &bigNumber << std::endl;

  return 0;
}
`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! ❔
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>What is the purpose of the & operator in C++?</li>
        <li>
          Why is it essential to understand memory organization in
          programming?
        </li>
        <li>
          How do different data types influence memory allocation?
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
            1. The & operator is used to get the memory address of a
            variable.
          </p>
          <p>
            2. Understanding memory organization is crucial for efficient
            memory management, debugging, and optimizing program
            performance.
          </p>
          <p>
            3. Different data types have varying memory requirements. For
            example, an int might use 4 bytes while a char uses 1 byte.
            This impacts how much memory is allocated for variables.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default MemoryOrganizationandRepresentation;
