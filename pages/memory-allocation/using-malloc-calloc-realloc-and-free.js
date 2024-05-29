import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const DynamicMemoryAllocation = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Using malloc(), calloc(), realloc(), and free(): Mastering Dynamic Memory in C++">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Using malloc(), calloc(), realloc(), and free(): Mastering Dynamic Memory in C++
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're baking a cake, but you don't know how many
        guests will come. Do you pre-make a massive cake "just in case,"
        risking waste? Or do you bake a small one and disappoint late
        arrivals?  Dynamic memory allocation in C++ is like having a
        magical oven: you can resize your cake (memory) on the fly!
        Let's explore the tools to do this: 
        <code className="font-bold text-lg text-red-400">malloc()</code>, 
        <code className="font-bold text-lg text-red-400">calloc()</code>, 
        <code className="font-bold text-lg text-red-400">realloc()</code>,
        and <code className="font-bold text-lg text-red-400">free()</code>.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        malloc(): Grabbing a Chunk of Memory
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        <code className="font-bold text-lg text-red-400">malloc()</code> 
        is your first tool - think of it as asking the operating system 
        for a raw piece of memory. You tell it how many bytes you need,
        and it (hopefully) hands you back the address of that space.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>
#include <cstdlib> // Required for malloc()

int main() {
    int *ptr;
    ptr = (int*)malloc(5 * sizeof(int)); // Space for 5 integers

    if (ptr == nullptr) {
        std::cout << "Memory allocation failed!\n";
        return 1; 
    }

    // ... now you can use 'ptr' to access this memory ...

    free(ptr); // VERY IMPORTANT: Give the memory back!
    return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        **Key points**:
      </p>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Always check if <code className="font-bold text-lg text-red-400">malloc()</code> 
          returns <code className="font-bold text-lg text-red-400">nullptr</code> 
          (meaning allocation failed).
        </li>
        <li>
          You get raw bytes - you're responsible for treating them 
          as the correct data type (here, we cast to 
          <code className="font-bold text-lg text-red-400">int*</code>).
        </li>
        <li>
          **Memory leaks**: Forgetting <code className="font-bold text-lg text-red-400">free(ptr)</code> 
          is like leaving the oven on forever - eventually, you run out of 
          "kitchen" (memory)!
        </li>
      </ul>

      {/* More content on calloc(), realloc(), and additional examples/explanations can be added here... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Building a Dynamic Array
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Your mission: write a program that asks the user how many 
        numbers they want to enter.  Use <code className="font-bold text-lg text-red-400">malloc()</code> to 
        create an array of that size dynamically. Fill it with user input,
        and then print the numbers back out. Don't forget to 
        <code className="font-bold text-lg text-red-400">free()</code> 
        your memory!
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
          Hint: Remember to use a loop to take input and print the elements 
          of your dynamically allocated array.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>
#include <cstdlib>

int main() {
    int size, i;
    int *array;

    std::cout << "How many numbers? ";
    std::cin >> size;

    array = (int*)malloc(size * sizeof(int));

    if (array == nullptr) {
        std::cout << "Memory allocation failed!\n";
        return 1;
    }

    std::cout << "Enter the numbers:\n";
    for (i = 0; i < size; ++i) {
        std::cin >> array[i];
    }

    std::cout << "You entered: ";
    for (i = 0; i < size; ++i) {
        std::cout << array[i] << " ";
    }
    std::cout << std::endl;

    free(array);
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
          What's the main danger of using <code className="font-bold text-lg text-red-400">malloc()</code> 
          without its counterpart?
        </li>
        <li>
          If <code className="font-bold text-lg text-red-400">malloc()</code> 
          can't find space, what does it return?
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
            1. The main danger is **memory leaks**, where you keep losing
            usable memory because you didn't <code className="font-bold text-lg text-red-400">free()</code> 
            what you allocated.
          </p>
          <p>
            2. If <code className="font-bold text-lg text-red-400">malloc()</code> 
            fails, it returns a <code className="font-bold text-lg text-red-400">nullptr</code>.
          </p>
        </div>
      )}

    </Layout>
  );
};

export default DynamicMemoryAllocation;
