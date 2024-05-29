import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const PointersandAddresses = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Pointers and Addresses: Unlocking Memory Secrets">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Pointers and Addresses: Unlocking Memory Secrets 🔓🧠
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're on a treasure hunt. You have a map, but instead of
        leading you directly to the treasure, it gives you cryptic clues about
        its location. That's kind of what pointers do in C++. They hold the
        "address" of your data in the computer's memory, like a secret code to
        find its hiding spot! Intrigued? Let's dive in! 🧭
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >{`#include <iostream>

int main() {
  int age = 30; // Let's say you're 30 years young (or wise!)
  int* agePtr = &age; // agePtr is now a pointer to age

  std::cout << "Your age is: " << age << std::endl;
  std::cout << "Memory address of age: " << &age << std::endl;
  std::cout << "agePtr points to: " << agePtr << std::endl; 

  return 0;
}`}</SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, <code className="font-bold text-lg text-red-400">age</code> is an
        integer variable holding the value 30. We use the{" "}
        <code className="font-bold text-lg text-red-400">&</code> operator to get
        its memory address and store it in{" "}
        <code className="font-bold text-lg text-red-400">agePtr</code>, which is
        declared as an integer pointer (using the{" "}
        <code className="font-bold text-lg text-red-400">*</code>) . Think of{" "}
        <code className="font-bold text-lg text-red-400">agePtr</code> as a GPS
        coordinate pointing to where{" "}
        <code className="font-bold text-lg text-red-400">age</code> lives in
        memory.
      </p>

      <p>Explanation using -&gt; &lt;- has to be escaped: &gt; &lt;</p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Treasure Hunt Time!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Write a program that declares a variable called{" "}
        <code className="font-bold text-lg text-red-400">treasureLocation</code>{" "}
        (you can decide what data type to use). Then, declare a pointer that
        points to your treasure. Finally, print out both the value of{" "}
        <code className="font-bold text-lg text-red-400">treasureLocation</code>{" "}
        and the memory address it's stored at (which your pointer should be
        pointing to). Can you decipher the memory map? 🤔
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
          Hint: Remember to use the & operator to get the address of a
          variable and the * operator to declare a pointer variable.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >{`#include <iostream>

int main() {
  std::string treasureLocation = "Under the couch cushions!"; 
  std::string* ptrToTreasure = &treasureLocation;

  std::cout << "The treasure is located: " << treasureLocation << std::endl;
  std::cout << "The pointer says: " << ptrToTreasure << std::endl;

  return 0;
}`}</SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What is the symbol used to declare a pointer variable in C++?
        </li>
        <li>
          How do you get the memory address of a variable in C++?
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
          <p>1. The asterisk symbol (*) is used to declare a pointer.</p>
          <p>
            2. The ampersand symbol (&) is used to get the memory address of a
            variable.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default PointersandAddresses;