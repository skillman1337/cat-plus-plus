import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CommonPitfallsMemoryLeaksandDanglingPointers = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Common Pitfalls: Memory Leaks and Dangling Pointers: Navigating the Memory Minefield">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Common Pitfalls: Memory Leaks and Dangling Pointers: Navigating the Memory Minefield
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're throwing a party, and you've rented some awesome party
        supplies – tables, chairs, a fog machine (because, why not?). 🎉 But
        imagine forgetting to return these items after the party! 😱 In C++,
        memory leaks are like forgetting to return your rented supplies. You
        allocate memory (rent the supplies), but you don't give it back when
        you're done. This can clutter up your program and eventually lead to
        problems. 
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Then there are dangling pointers – these are like getting directions to a
        friend's house, but they've already moved out! 🏚️ Your pointer is
        pointing to a memory location that's no longer valid, potentially
        leading to crashes or unexpected behavior.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Memory Leaks: The Unreturned Party Supplies
      </h2>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

        void leakyFunction() {
          int* ptr = new int(5); // Allocating memory on the heap
          // ... some code that uses ptr ... 
          // Oops, we forgot to delete!
        }

        int main() {
          leakyFunction();
          // The memory allocated for 'ptr' is now leaked!
          return 0;
        }`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, <code className="font-bold text-lg text-red-400">leakyFunction</code> allocates memory for an integer using 
        <code className="font-bold text-lg text-red-400">new</code>, but it forgets to deallocate it using 
        <code className="font-bold text-lg text-red-400">delete</code>.  This means the memory is stuck in use, even though 
        the function has finished!
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Dangling Pointers: The Outdated Map
      </h2>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

        int* createInt() {
          int* temp = new int(10);
          return temp; 
        }

        int main() {
          int* ptr = createInt();
          // ... some code ...
          delete ptr; // We delete the memory ptr points to
          
          int* anotherPtr = createInt(); // Uh oh! anotherPtr might point to the same memory location as ptr!
          std::cout << *anotherPtr; // Potential disaster! Accessing deallocated memory!
          // ... more code ...

          return 0;
        }`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        Here, <code className="font-bold text-lg text-red-400">createInt</code> returns a pointer to a local variable. 
        Once the function ends, that local memory is gone! If you try to use the 
        pointer later, you're in for a world of hurt – it's undefined behavior, 
        meaning anything could happen.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Spot the Memory Mishap!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Can you identify the memory leak in the following code?
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

        void processData() {
            int* data = new int[100]; 
            // ... some code that processes the data ... 
        }

        int main() {
            processData(); 
            // ... rest of the program ...
            return 0;
        }
        `}
      </SyntaxHighlighter>

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
          Hint:  Look closely at how the memory for 'data' is allocated and where it might be freed.
        </p>
      )}

      {showSolution && (
        <div>
          <p className="mb-4 text-lg leading-relaxed">
            The memory leak happens because we allocated memory for <code className="font-bold text-lg text-red-400">data</code> using <code className="font-bold text-lg text-red-400">new</code>, but we never deallocated it using <code className="font-bold text-lg text-red-400">delete[]</code>.  
          </p>

          <SyntaxHighlighter
              language="cpp"
              style={atomOneDarkReasonable}
              className="rounded mb-6"
            >
              {`#include <iostream>

              void processData() {
                  int* data = new int[100]; 
                  // ... some code that processes the data ... 
                  delete[] data; // Don't forget to clean up!
              }

              int main() {
                  processData(); 
                  // ... rest of the program ...
                  return 0;
              }
              `}
          </SyntaxHighlighter>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What is the primary danger of a memory leak in a C++ program?
        </li>
        <li>
          How can you prevent dangling pointers from occurring? 
        </li>
      </ul>

      <button
        onClick={() => setShowQuizSolution(!showQuizSolution)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 mb-5"
      >
        {showQuizSolution ? "Hide Solutions" : "Show Solutions"}
      </button>

      {showQuizSolution && (
        <div className="bg-gray-800 p-4 rounded mb-6 text-lg leading-relaxed">
          <p>
            **1. Memory Exhaustion:**  Memory leaks lead to wasted memory. Over time, your program might consume 
            more and more memory, potentially crashing the program or even the entire system. 
          </p>
          <p>
            **2. Avoiding Dangling Pointers:** 
            <ul className="list-disc list-inside ml-6">
              <li>**Smart Pointers:**  Utilize smart pointers (<code className="font-bold text-lg text-red-400">std::unique_ptr</code>, <code className="font-bold text-lg text-red-400">std::shared_ptr</code>) which automatically manage memory deallocation.</li>
              <li>**RAII (Resource Acquisition Is Initialization):**  This technique involves using classes to wrap 
              around resources (like memory) so that the resource is automatically released when the object goes out of scope.</li>
              <li>**Careful Memory Management:** Be incredibly mindful of when and where you allocate and deallocate memory. Ensure that every <code className="font-bold text-lg text-red-400">new</code> is paired with a corresponding <code className="font-bold text-lg text-red-400">delete</code> (or <code className="font-bold text-lg text-red-400">delete[]</code> for arrays). </li>
            </ul>
          </p>
        </div>
      )}
    </Layout>
  );
};

export default CommonPitfallsMemoryLeaksandDanglingPointers;