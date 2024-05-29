import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const AnalyzingMemoryUsageProfiles = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Analyzing Memory Usage Profiles: Unmasking Memory Mysteries">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Analyzing Memory Usage Profiles: Unmasking Memory Mysteries
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're a detective investigating a crime scene, but instead of
        searching for fingerprints, you're on the hunt for memory leaks! In C++,
        understanding how your program uses memory is crucial for writing
        efficient and robust applications. This chapter equips you with the
        tools and techniques to become a memory detective, analyzing memory
        usage profiles to identify and resolve memory-related issues.
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >{`// Example of a potential memory leak
#include <iostream>

void leakyFunction() {
  // Dynamically allocate memory on the heap
  int *ptr = new int;

  // Oops! We forgot to deallocate the memory 
  // pointed to by 'ptr' before exiting the function.
}

int main() {
  // Call the function that leaks memory
  leakyFunction();

  // ... other code ...

  return 0;
}`}</SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, the <code>leakyFunction</code> dynamically allocates
        memory for an integer using <code>new</code>. However, it fails to
        deallocate this memory using <code>delete</code> before exiting the
        function. This omission results in a memory leak—the allocated memory
        remains inaccessible and unusable by the program, leading to wasted
        resources and potentially crashing your application if left unchecked.
      </p>

      <p>
        To track down these memory mysteries, we use tools called memory
        profilers. These handy tools give us a snapshot of how our program is
        using memory. Think of it like a map that highlights the areas where
        memory is being held captive!
      </p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Track Down the Memory Bandit!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        You've been given a program that seems to be hoarding memory like a
        dragon with treasure. Your mission, should you choose to accept it, is
        to use a memory profiler (like Valgrind or similar tools) to identify
        the culprit code section responsible for this memory-hoarding behavior.
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
          Hint: Pay close attention to memory allocation patterns. Are there any
          places in the code where memory is allocated but not properly
          released? Look for loops or functions that might be repeatedly
          allocating memory without deallocating it.
        </p>
      )}

      {/* Example of how the solution could be presented */}
      {showSolution && (
        <div>
          <p className="mb-4 text-lg leading-relaxed">
            Let's say your memory profiler points you to a function like this:
          </p>
          <SyntaxHighlighter
            language="cpp"
            style={atomOneDarkReasonable}
            className="rounded mb-6"
          >{`void hoardMemory(int iterations) {
  for (int i = 0; i < iterations; ++i) {
    int *data = new int[1000]; 
    // Do something with data... but never delete it!
  }
}`}</SyntaxHighlighter>
          <p className="mb-4 text-lg leading-relaxed">
            The problem here is within the loop. We allocate a chunk of memory
            for 1000 integers with each iteration, but we never free that memory
            using <code>delete[] data;</code>. This means the memory use will
            grow and grow with each loop iteration!
          </p>
        </div>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>What is a memory leak, and why is it a problem?</li>
        <li>
          Give an example of a C++ code snippet that could cause a memory leak.
        </li>
        <li>
          Name at least one tool that can be used to profile the memory usage of
          a C++ program.
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
            **1. What is a memory leak, and why is it a problem?**
            <br />A memory leak occurs when a program allocates memory but fails
            to release it back to the system when it's no longer needed. This
            leads to a gradual increase in memory consumption, which can
            eventually cause the program to slow down, crash, or become
            unresponsive.
          </p>
          <p>
            **2. Give an example of a C++ code snippet that could cause a memory
            leak.**
            <br />
            <SyntaxHighlighter
              language="cpp"
              style={atomOneDarkReasonable}
              className="rounded mb-6"
            >
              {`#include <iostream>
void leakyFunction() {
    int *ptr = new int; // Memory allocated here
    // No 'delete ptr;' to release the memory! 
} 
int main() {
    leakyFunction();
    // ... the memory pointed to by 'ptr' is now lost! 
    return 0;
}`}
            </SyntaxHighlighter>
          </p>
          <p>
            **3. Name at least one tool that can be used to profile the memory
            usage of a C++ program.**
            <br />
            Here are a few popular ones:
            <ul>
              <li>Valgrind (specifically the Memcheck tool)</li>
              <li>AddressSanitizer (ASan)</li>
              <li>LeakTracer</li>
            </ul>
          </p>
        </div>
      )}
    </Layout>
  );
};

export default AnalyzingMemoryUsageProfiles;
