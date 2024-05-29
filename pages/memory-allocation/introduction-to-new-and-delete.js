import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Introductiontonewanddelete = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Introduction to new and delete: Dynamic Memory Allocation Like a Pro">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Introduction to new and delete: Dynamic Memory Allocation Like a Pro
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Ever wished you could create objects in C++ on the fly, only when
        you need them? That's where the magic of <code>new</code> and
        <code>delete</code> comes in! These powerful keywords give you the
        ability to manage memory dynamically, making your programs more
        efficient and adaptable. 🪄
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
    // Using 'new' to allocate memory for an integer
    int *ptr = new int; 

    // Assigning a value
    *ptr = 42; 

    std::cout << "Value at ptr: " << *ptr << std::endl;

    // Don't forget to free the memory when you're done!
    delete ptr;

    return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, <code>new int</code> requests the operating system for
        a chunk of memory just big enough to hold an integer. The OS returns the
        memory address, which we store in the pointer <code>ptr</code>. Think
        of <code>ptr</code> as a label pointing to the newly allocated memory
        location.  We use <code>*ptr</code> to access and modify the value
        stored at that address. But remember, with great power comes great
        responsibility! Once we're done, <code>delete ptr</code> gives the
        memory back to the OS, preventing those nasty memory leaks! 🗑️
      </p>

      <p>Explanation using -&gt; &lt;- has to be escaped: &gt; &lt;</p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Create a Dynamic Duo of Integers
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's put your newfound knowledge to the test! Write a C++ program that
        uses <code>new</code> to dynamically allocate memory for two integers.
        Assign the values 10 and 20 to these integers. Then, print their sum.
        Finally, be a responsible coder and free the allocated memory using
        <code>delete</code>. 💪
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
          Hint: Remember to use pointers to store the addresses of the
          dynamically allocated integers. You can access the values using the
          dereference operator (
          <code>*</code>
          ).
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
    // Allocate memory for two integers
    int *num1 = new int;
    int *num2 = new int;

    // Assign values
    *num1 = 10;
    *num2 = 20;

    // Calculate and print the sum
    int sum = *num1 + *num2;
    std::cout << "Sum: " << sum << std::endl;

    // Free the allocated memory
    delete num1;
    delete num2;

    return 0;
}`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What is the primary advantage of using <code>new</code> and
          <code>delete</code> for memory allocation?
        </li>
        <li>
          What happens if you use <code>delete</code> on a pointer that doesn't
          point to dynamically allocated memory?
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
            <strong>Answer 1:</strong> <code>new</code> and
            <code>delete</code> allow for dynamic memory allocation, meaning you
            can allocate memory during program execution instead of at compile
            time. This makes your programs more efficient and adaptable to
            varying data sizes.
          </p>
          <p>
            <strong>Answer 2:</strong> Using <code>delete</code> on a pointer
            that doesn't point to dynamically allocated memory leads to
            undefined behavior. This could crash your program or cause other
            unexpected issues. 💀
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Introductiontonewanddelete;
