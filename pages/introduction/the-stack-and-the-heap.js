import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const TheStackandtheHeap = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="The Stack and the Heap: Where Your Data Lives">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        The Stack and the Heap: Where Your Data Lives 🏘️
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine a bustling city 🌆. You've got towering skyscrapers and cozy
        houses. In the world of C++, the stack and the heap are like the city's
        two main neighborhoods where your data sets up camp.  The stack is like a
        well-organized apartment building, while the heap is more like a free-flowing
        suburb. Let's explore! 🗺️
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        The Stack: Quick and Efficient ⚡
      </h2>
      
      <p className="mb-4 text-lg leading-relaxed">
        The stack is your go-to for data that's short-term and predictable. Think
        of local variables declared inside functions. They're like efficient
        apartment dwellers - they move in when a function is called and move out
        as soon as it finishes. 📦➡️🚪
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

void greet(int count) {
  // 'message' and 'count' live on the stack
  std::string message = "Hello!"; 
  std::cout << message << " You said hello " << count << " times." << std::endl;
}

int main() {
  greet(3); // 'message' and 'count' are gone after this!
  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        Data on the stack follows strict rules. It's automatically managed - no
        need to "reserve" space or clean up after yourself.  However, this
        efficiency comes at a price - the stack has limited space. Trying to
        store very large objects (like huge arrays) on the stack can lead to a
        "stack overflow" - like trying to fit a giant elephant in a tiny
        apartment! 🐘🏢💥
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        The Heap: Flexible but Requires Responsibility 🌳
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        When you need more space or want data to outlive the function that
        created it, head to the heap! It's like buying land in the suburbs - you've got
        more freedom to build what you want, but you're responsible for
        maintenance.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  // Request memory on the heap (using 'new')
  int* numbers = new int[10000]; 

  // Use the array

  // Clean up when you're done (using 'delete')
  delete[] numbers; 

  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        The <code className="font-bold text-lg text-red-400">new</code> keyword is like hiring a construction
        crew to build your data house on the heap, while <code className="font-bold text-lg text-red-400">delete</code>
        is the demolition team you call when you're done. Forgetting to clean up
        (<code className="font-bold text-lg text-red-400">delete</code>) leads to memory leaks - like leaving
        construction debris scattered around your suburb! 🗑️
      </p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Memory Mastermind 🧠
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Write a C++ program that declares:
      </p>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
          <li>
            An integer variable <code className="font-bold text-lg text-red-400">age</code> on the stack.
          </li>
          <li>
            An array named <code className="font-bold text-lg text-red-400">inventory</code> to store 100 item prices (consider using <code className="font-bold text-lg text-red-400">double</code>) on the heap. Don't forget to clean up!
          </li>
      </ul>
      

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
          Hint: Remember to use <code className="font-bold text-lg text-red-400">new</code> to allocate memory on the heap
          and <code className="font-bold text-lg text-red-400">delete[]</code> to deallocate it afterwards.
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
  // Declare 'age' on the stack
  int age = 25;  

  // Allocate 'inventory' on the heap
  double* inventory = new double[100]; 

  // ... (use the 'inventory' array) ...

  // Free the memory allocated for 'inventory'
  delete[] inventory; 

  return 0;
}`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! 
      </h2>

      <ol className="list-decimal list-inside mb-4 text-lg leading-relaxed">
        <li>
          What's the main advantage of storing data on the stack?
        </li>
        <li>
          Why is it crucial to use <code className="font-bold text-lg text-red-400">delete</code> after you're done with
          data on the heap?
        </li>
      </ol>

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
          <ol className="list-decimal list-inside mb-4 text-lg leading-relaxed">
            <li>
              The stack is fast and automatically managed. Data is added and removed
              efficiently, making it great for temporary data within functions.
            </li>
            <li>
              Failing to use <code className="font-bold text-lg text-red-400">delete</code> leads to memory leaks. This
              means your program keeps holding onto unused memory, which can
              eventually slow down your computer or even cause it to crash. 
            </li>
          </ol>
        </div>
      )}

    </Layout>
  );
};

export default TheStackandtheHeap;