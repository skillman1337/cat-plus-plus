import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CommonMemoryRelatedErrors = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Common Memory-Related Errors: Navigating the Minefield">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Common Memory-Related Errors: Navigating the Minefield 💣
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Ah, memory management in C++. It's like handling a bag of kittens –
        adorable and fluffy, but capable of wreaking havoc if you're not
        careful!  😜  Today, we're diving into the treacherous world of
        memory-related errors. We'll learn to spot those pesky bugs and master
        the art of keeping our programs crash-free! 🚀
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Segmentation Fault (SIGSEGV): The Dreaded Crash 💥
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Ever had your program crash with a message screaming "Segmentation
        Fault"?  It's like C++'s way of telling you, "Hey, you tried to access
        memory you shouldn't have!" 😠 This usually happens when you:
      </p>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Use a pointer that's not pointing to a valid memory location (like a
          dangling pointer or an uninitialized pointer).
        </li>
        <li> Access memory outside the bounds of an array.</li>
        <li>
          Try to write to a read-only memory location (like a string literal).
        </li>
      </ul>

      {/* Code Example */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  int *ptr; // Uninitialized pointer
  *ptr = 10; // Trying to write to an invalid memory location 💥

  return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we declared a pointer <code className="font-bold text-lg text-red-400">ptr</code> but didn't initialize it to point to a valid memory
        location. Trying to dereference (using the * operator) an uninitialized
        pointer is a big no-no and leads to a segmentation fault.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Memory Leaks: The Silent Killer 👻
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're constantly ordering takeout but never throwing away the
        leftovers. Your kitchen would be a disaster, right? 🤢 Memory leaks
        are similar. They happen when you allocate memory dynamically (using
        <code className="font-bold text-lg text-red-400">new</code>) but forget to release it (using
        <code className="font-bold text-lg text-red-400">delete</code>) when you're done with it. Over time, this
        gobbles up available memory and can slow down or even crash your
        program.
      </p>

      {/* Code Example */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

void leakyFunction() {
  int *ptr = new int; // Allocating memory
  // ... do something with ptr ...
  // Oops, forgot to delete ptr! 💧 Memory leak!
}

int main() {
  while (true) {
    leakyFunction(); // Calling the leaky function repeatedly
  }
  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        Our <code className="font-bold text-lg text-red-400">leakyFunction</code> allocates an integer but never
        releases it. If we keep calling this function, we'll keep losing memory
        until there's none left! 😱
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Spot the Memory Leak 🕵️
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Can you find the memory leak in the following code snippet?
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  for (int i = 0; i < 10; ++i) {
    int *ptr = new int;
    *ptr = i * 2;
    std::cout << *ptr << std::endl;
  }
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
          Hint: Look closely at the loop and what happens to the memory
          allocated inside it.
        </p>
      )}

      {showSolution && (
        <div>
          <p className="mb-4 text-lg leading-relaxed">
            The memory allocated inside the loop using <code className="font-bold text-lg text-red-400">new int</code> is never
            released. We need to add a <code className="font-bold text-lg text-red-400">delete ptr;</code> statement after we're
            done using the pointer within each iteration.
          </p>
          <SyntaxHighlighter
            language="cpp"
            style={atomOneDarkReasonable}
            className="rounded mb-6"
          >
            {`#include <iostream>

int main() {
  for (int i = 0; i < 10; ++i) {
    int *ptr = new int;
    *ptr = i * 2;
    std::cout << *ptr << std::endl;
    delete ptr; // Now we're releasing the memory! 👍
  }
  return 0;
}`}
          </SyntaxHighlighter>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! 🧠
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What's the most likely cause of a "Segmentation Fault" error?
        </li>
        <li>
          Why are memory leaks dangerous, even if they don't cause an
          immediate crash?
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
            **Solution 1:** Accessing memory that your program is not
            allowed to access, such as using an uninitialized pointer,
            accessing memory out of bounds of an array, or writing to
            read-only memory.
          </p>
          <p>
            **Solution 2:** Memory leaks gradually reduce the amount of
            available memory, which can lead to poor performance,
            unpredictable behavior, and eventually, a complete crash as
            the program runs out of memory to allocate.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default CommonMemoryRelatedErrors;