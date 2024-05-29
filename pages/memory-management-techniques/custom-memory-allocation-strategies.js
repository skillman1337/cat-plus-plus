import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CustomMemoryAllocationStrategies = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Custom Memory Allocation Strategies: Taming the Heap Your Way">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Custom Memory Allocation Strategies: Taming the Heap Your Way
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Ever feel like you're playing Tetris with memory, trying to fit
        objects just right using <code>new</code> and <code>delete</code>?  Sometimes, the default memory
        management in C++ just doesn't cut it. 🤔  That's where custom
        memory allocation swoops in like a superhero!  🚀  It gives you
        the power to manage memory on your own terms, leading to faster,
        more efficient programs. 
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`// A simple custom allocator for fixed-size blocks
        #include <iostream>
        #include <cstddef> // For std::size_t

        class MyAllocator {
        private:
          char* memoryPool;
          std::size_t blockSize;
          std::size_t poolSize;
          std::size_t nextFreeBlock;

        public:
          MyAllocator(std::size_t blockSize, std::size_t poolSize)
            : blockSize(blockSize), poolSize(poolSize), nextFreeBlock(0) {
            memoryPool = new char[blockSize * poolSize];
          }

          ~MyAllocator() {
            delete[] memoryPool;
          }

          void* allocate() {
            if (nextFreeBlock < poolSize) {
              void* ptr = memoryPool + (nextFreeBlock * blockSize);
              ++nextFreeBlock;
              return ptr;
            } else {
              return nullptr; // Out of memory!
            }
          }

          void deallocate(void* ptr) {
            // For simplicity, we don't actually free memory in this example.
            // A real implementation would likely mark blocks as free for reuse.
          }
        };

        int main() {
          MyAllocator myAlloc(sizeof(int), 10); // Can allocate 10 ints

          int* myInt = static_cast<int*>(myAlloc.allocate());
          if (myInt) {
            *myInt = 42;
            std::cout << "Value: " << *myInt << std::endl;
            myAlloc.deallocate(myInt);
          }

          return 0;
        }`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we're creating a simple allocator that doles out
        fixed-size chunks of memory (perfect for storing lots of objects
        of the same type).  We've got a <code>memoryPool</code> to store the
        goods, and we use <code>allocate()</code> to grab a chunk and <code>deallocate()</code> 
        to (pretend to) give it back. 😜 
      </p>

      <p>Remember, escaping those arrows is important! Like this: &gt; and &lt; </p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Build a Stack Allocator
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Time to flex your coding muscles! 💪  Your mission, should you
        choose to accept it, is to build a basic stack allocator.  
        Remember, stack allocators are super-fast because they allocate
        and deallocate memory in a LIFO (Last-In, First-Out) manner.
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
          Hint: Think about using a pointer to keep track of the current top
          of the stack.  When you allocate, you move the pointer "up" the
          stack, and when you deallocate, you move it back "down."
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>
            #include <cstddef>

            class StackAllocator {
            private:
              char* memoryPool;
              std::size_t stackSize;
              char* stackTop;

            public:
              StackAllocator(std::size_t stackSize) : stackSize(stackSize) {
                memoryPool = new char[stackSize];
                stackTop = memoryPool;
              }

              ~StackAllocator() {
                delete[] memoryPool;
              }

              void* allocate(std::size_t size) {
                if (stackTop + size <= memoryPool + stackSize) {
                  void* ptr = stackTop;
                  stackTop += size;
                  return ptr;
                } else {
                  return nullptr; // Stack overflow!
                }
              }

              void deallocate(std::size_t size) {
                if (stackTop - size >= memoryPool) {
                  stackTop -= size;
                } else {
                  // Stack underflow! - Handle error
                }
              }
            };

            int main() {
              StackAllocator stackAlloc(1024); 

              int* data1 = static_cast<int*>(stackAlloc.allocate(sizeof(int)));
              if (data1) *data1 = 10; 

              double* data2 = static_cast<double*>(stackAlloc.allocate(sizeof(double)));
              if (data2) *data2 = 3.14;

              stackAlloc.deallocate(sizeof(double)); 
              stackAlloc.deallocate(sizeof(int)); 

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
          Why might you choose to use a custom memory allocation strategy?
        </li>
        <li>
          What's a potential downside of managing memory yourself? 
        </li>
        <li>
          Give an example of a scenario where a stack allocator would be
          a good choice.
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
            You might choose a custom strategy for performance optimization (e.g.,
            reducing memory fragmentation), to handle memory in a specific way 
            for your application, or to implement specialized allocators like pool 
            allocators for objects of the same size.
          </p>
          <p>
            The biggest downside is the increased complexity and risk of errors 
            like memory leaks or dangling pointers.  It puts the burden of memory 
            management squarely on your shoulders!
          </p>
          <p>
            A stack allocator is great when you have a bunch of temporary data 
            that you know will be used and released in a LIFO order, like local
            variables within a function scope. 
          </p>
        </div>
      )}

    </Layout>
  );
};

export default CustomMemoryAllocationStrategies;
