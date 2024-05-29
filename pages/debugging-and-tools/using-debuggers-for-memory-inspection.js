import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const UsingDebuggersforMemoryInspection = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Using Debuggers for Memory Inspection: Unmasking the Secrets of Memory">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Using Debuggers for Memory Inspection: Unmasking the Secrets of Memory 
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Ever feel like your C++ program is speaking a secret language,
        especially when it comes to memory management?  It's like trying to
        understand what's going on behind the scenes of a magic trick.  Don't worry, 
        debuggers are here to be your trusty sidekick, giving you X-ray vision into 
        your program's memory!  In this chapter, we'll learn how to use debuggers to 
        inspect memory, track down elusive bugs, and become memory management masters! 🪄
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
    int* ptr = new int(10); // Allocate memory dynamically

    // ... some code ...

    delete ptr;  // Free the allocated memory
    
    return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we use <code>new</code> to allocate memory dynamically
        for an integer and store the address in the pointer <code>ptr</code>. 
        Later, we use <code>delete</code> to free up that memory. Forgetting 
        to free memory can lead to memory leaks, while accessing freed memory can 
        cause crashes.  A debugger can help us monitor these memory allocations and 
        deallocations, ensuring everything is running smoothly!
      </p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Track Down the Memory Leak!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're a detective investigating a case of missing memory.  Your 
        program is the crime scene, and a sneaky memory leak is the culprit!  Your 
        mission, should you choose to accept it (and you should!), is to use a debugger 
        to find the line of code responsible for this memory leak.
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
          Hint: Set breakpoints in your code and use the debugger's watch window 
          or memory view to observe the memory usage as you step through the program's 
          execution. Look for any allocations that are not properly deallocated.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`// Example of a memory leak
          #include <iostream>

          void leakyFunction() {
              int* leakyPtr = new int(5);
              // Oops! Forgot to delete leakyPtr
          }

          int main() {
              leakyFunction(); // Memory leak occurs here!

              return 0;
          }`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! 🕵️‍♀️
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What is the primary advantage of using a debugger for memory inspection
          over simply printing values to the console?
        </li>
        <li>
          Describe two common memory-related errors in C++ and explain how a 
          debugger can help identify them.
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
            **Solution 1:** Debuggers provide a more comprehensive and interactive 
            view of memory compared to console prints. They allow you to pause execution, 
            inspect the values of variables at different points in time, and even 
            visualize memory layouts.  
          </p>
          <p>
            **Solution 2:**  Two common memory-related errors are:
            <br />
            - **Memory Leaks:** Failing to deallocate dynamically allocated memory, leading to wasted resources. Debuggers can track allocations and deallocations, making it easier to spot leaks.
            <br />
            - **Dangling Pointers/Segmentation Faults:** Accessing memory that has already been freed or is out of scope.  Debuggers can help you identify the exact line of code where a segmentation fault occurs, often pinpointing the use of a dangling pointer.
          </p>
        </div>
      )}

    </Layout>
  );
};

export default UsingDebuggersforMemoryInspection;
