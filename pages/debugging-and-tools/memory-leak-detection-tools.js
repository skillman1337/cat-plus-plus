import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MemoryLeakDetectionTools = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Memory Leak Detection Tools: Hunting Down Memory Goblins">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Memory Leak Detection Tools: Hunting Down Memory Goblins
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine a mischievous goblin sneaking into your program, snatching up
        bits of memory and refusing to let go! 😈 That's essentially what a
        memory leak is. Over time, these leaks can slow down your program,
        cause crashes, and leave you scratching your head in confusion. But fear
        not! Just like we have goblin hunters, the C++ world offers powerful
        tools to detect and exterminate these memory leaks.
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >{`// Example of a memory leak (Don't do this at home!):
#include <iostream>

void leakyFunction() {
  int *ptr = new int; // Allocate memory on the heap
  // Oops! We forgot to delete ptr!
}

int main() {
  while (true) {
    leakyFunction(); // This function leaks memory with each call!
  }
  return 0; 
}
`}</SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this sneaky code, <code className="font-bold text-lg text-red-400">leakyFunction()</code> allocates memory using{" "}
        <code className="font-bold text-lg text-red-400">new</code> but forgets to free it with{" "}
        <code className="font-bold text-lg text-red-400">delete</code>. Every time it's called,
        more memory vanishes into the goblin's pouch! This is where memory leak
        detection tools come in handy.
      </p>

      {/* More content, explanations, code examples as needed... */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Valgrind: The Memory Detective
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Valgrind is like a seasoned detective with a magnifying glass,
        meticulously inspecting your program for memory leaks and other memory
        management errors. It's a powerful command-line tool that can help you
        track down even the most elusive leaks.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        To use Valgrind, you would typically compile your program with
        debugging symbols (using the -g flag) and then run it through Valgrind
        like so:
      </p>
      <SyntaxHighlighter
        language="bash"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >{`valgrind --leak-check=full ./your_program
`}</SyntaxHighlighter>
      <p className="mb-4 text-lg leading-relaxed">
        Valgrind will then give you a detailed report, pointing out any memory
        leaks, invalid memory accesses, and other memory-related issues. 🕵️‍♂️
      </p>

      {/* More tools, such as AddressSanitizer, LeakSanitizer, etc. */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Track Down the Leaky Faucet! 🚰
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        You've been given a program that's leaking memory like a broken faucet!
        Your mission is to use Valgrind to identify the source of the leak and
        fix it.
      </p>

      {/* Provide code with a memory leak for the task */}
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
          Hint: Pay close attention to any memory allocations (using{" "}
          <code className="font-bold text-lg text-red-400">new</code>) that don't have a
          corresponding deallocation (using{" "}
          <code className="font-bold text-lg text-red-400">delete</code>). Valgrind's report
          will give you line numbers!
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >{`//  Example Solution -  Remember to remove the leak!
#include <iostream>

void leakyFunction() {
  int *ptr = new int; // Allocate memory on the heap
  delete ptr;        // Now we free the memory! No more leaks! 
}

int main() {
  while (true) {
    leakyFunction(); 
  }
  return 0; 
}
`}</SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>What is a memory leak, and why is it harmful?</li>
        <li>
          Name at least two memory leak detection tools available for C++.
        </li>
        <li>
          How can you compile your C++ program to make it easier for memory
          leak detectors to find issues?
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
            **1. What is a memory leak, and why is it harmful?**
            <br />
            A memory leak occurs when a program allocates memory but fails to
            release it after it's no longer needed. This prevents the memory
            from being reused, leading to reduced performance, potential
            crashes, and instability.
          </p>
          <p>
            **2. Name at least two memory leak detection tools available for
            C++.**
            <br />
            - Valgrind
            <br />
            - AddressSanitizer (ASan)
            <br />
            - LeakSanitizer (LSan)
          </p>
          <p>
            **3. How can you compile your C++ program to make it easier for
            memory leak detectors to find issues?**
            <br />
            Compile your program with debugging symbols enabled. This is
            typically done using the `-g` flag during compilation.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default MemoryLeakDetectionTools;