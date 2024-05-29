import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const GarbageCollectioninC = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Garbage Collection in C++: Manual Memory Management">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Garbage Collection in C++: Taking Out the Trash Yourself
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Ever wonder what happens to the memory used by your C++ programs
        after you're done with it? In languages like Java or Python, a
        garbage collector swoops in and cleans up unused memory for you. But
        C++ likes to keep things lean and mean – it gives you, the
        programmer, the power (and responsibility!) to manage memory
        manually. 
      </p>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        Think of it like this: you're throwing a party, and you're in charge
        of the snacks. You wouldn't just leave empty chip bags and plates
        lying around, would you?  In C++, you allocate memory on the heap
        using <code>new</code>, which is like setting out fresh snacks. When
        you're done with that memory, it's your job to clean up by using
        <code>delete</code> – like throwing away the trash. 
      </p>

      {/* Code Example */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

        int main() {
          // Allocate memory for an integer on the heap
          int* ptr = new int; 
          *ptr = 42; // Assign a value

          std::cout << "Value: " << *ptr << std::endl;

          // Deallocate the memory 
          delete ptr; 

          return 0;
        }`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we use <code>new</code> to create an integer on the
        heap and store its address in the pointer <code>ptr</code>.  After
        we're done with it, <code>delete ptr;</code>  is crucial – it
        releases the memory back to the system. Forgetting to do this
        leads to memory leaks, where your program keeps using more and
        more memory unnecessarily! 
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Debugging a Memory Leak
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're given the following code snippet. Your task is to
        identify the potential memory leak and fix it. 
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

        void leakyFunction() {
          int* myArray = new int[100]; // Allocate memory
          // ... some code that uses myArray ...
          // Oops, no 'delete' here!
        }

        int main() {
          leakyFunction();
          // ... more code ...
          return 0;
        }`}
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
          Hint: Look closely at the <code>leakyFunction()</code>.  What's
          happening to the memory allocated for <code>myArray</code>? Is it
          being freed properly?
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>

        void leakyFunction() {
          int* myArray = new int[100]; 
          // ... some code that uses myArray ...

          delete[] myArray; // Free the allocated memory!
        }

        int main() {
          leakyFunction();
          // ... more code ...
          return 0;
        }`}
        </SyntaxHighlighter>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What's the potential consequence of not deallocating memory with
          <code>delete</code> in C++?
        </li>
        <li>
          What's the difference between using <code>delete</code> and{" "}
          <code>delete[]</code> when deallocating memory?
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
            <strong>Answer 1:</strong> Not deallocating memory (memory
            leaks) can lead to your program using more and more memory over
            time, potentially crashing your program or the entire system.
          </p>
          <p>
            <strong>Answer 2:</strong> Use <code>delete</code> to deallocate
            a single object created with <code>new</code>, and use{" "}
            <code>delete[]</code> to deallocate arrays created with{" "}
            <code>new[]</code>.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default GarbageCollectioninC;
