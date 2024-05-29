import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CustomMemoryAllocators = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Custom Memory Allocators: Taking Control of the Heap">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Custom Memory Allocators: Taking Control of the Heap 🗺️
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        In the world of C++, we often rely on the trusty <code>new</code> and <code>delete</code> keywords 
        to manage our memory. But what if we told you that you could become a memory maestro, 
        conducting your own memory allocation symphony? That's where custom memory allocators 
        come in! They give you the power to optimize memory management for your specific needs, 
        potentially boosting your application's performance.
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`// A simple example of a custom allocator
#include <iostream>
#include <cstddef> // for std::size_t

template <typename T>
class MyAllocator {
public:
    // Allocate memory
    T* allocate(std::size_t n) {
        return reinterpret_cast<T*>(::operator new(n * sizeof(T)));
    }

    // Deallocate memory
    void deallocate(T* p, std::size_t n) {
        ::operator delete(p);
    }
};

int main() {
    // Create an instance of our custom allocator
    MyAllocator<int> myAlloc;

    // Allocate memory using our custom allocator
    int* ptr = myAlloc.allocate(5); 

    // Use the allocated memory (e.g., assign values)
    for (int i = 0; i < 5; ++i) {
        ptr[i] = i * 10;
    }

    // Print the values
    for (int i = 0; i < 5; ++i) {
        std::cout << ptr[i] << " ";
    }
    std::cout << std::endl;

    // Deallocate the memory using our custom allocator
    myAlloc.deallocate(ptr, 5); 

    return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we define <code>MyAllocator</code>, a barebones custom allocator. 
        It leverages the global operators <code>new</code> and <code>delete</code> for 
        allocation and deallocation. We then demonstrate its use by allocating an array of integers, 
        using it, and finally deallocating it. 
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Build a Better Pool! 🏊‍♀️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's put your newfound allocator knowledge into action! Imagine you're 
        tasked with creating a custom allocator optimized for frequently allocating 
        and deallocating small objects of a fixed size.  Your mission: Implement a simple 
        "fixed-size object pool" allocator. 
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
          Hint: Think about pre-allocating a chunk of memory and then dividing it 
          into equally sized blocks. You can use a free list to keep track of available blocks.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`// Example solution (not fully production-ready, but illustrates the concept)
#include <iostream>
#include <cstddef>
#include <list>

template <typename T, std::size_t ChunkSize = 10> 
class FixedSizePoolAllocator {
private:
    // Assuming sizeof(T*) >= sizeof(void*) 
    union Block { 
        T data;
        Block* next;
    };

    Block* freeList;
    Block* pool; 

public:
    FixedSizePoolAllocator() {
        pool = reinterpret_cast<Block*>(::operator new(ChunkSize * sizeof(Block)));
        freeList = pool;

        // Initialize the free list
        for (std::size_t i = 0; i < ChunkSize - 1; ++i) {
            pool[i].next = &pool[i + 1]; 
        }
        pool[ChunkSize - 1].next = nullptr;
    }

    ~FixedSizePoolAllocator() {
        ::operator delete(pool);
    }

    T* allocate() {
        if (!freeList) {
            return nullptr; // Or throw an exception, handle allocation failure
        }

        Block* block = freeList;
        freeList = freeList->next;
        return reinterpret_cast<T*>(block);
    }

    void deallocate(T* p) {
        Block* block = reinterpret_cast<Block*>(p);
        block->next = freeList;
        freeList = block;
    }
};

int main() {
    FixedSizePoolAllocator<int> intPool;

    int* a = intPool.allocate();
    int* b = intPool.allocate();

    *a = 10;
    *b = 20;

    std::cout << *a << " " << *b << std::endl;

    intPool.deallocate(a);
    intPool.deallocate(b); 

    return 0;
}
`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! 🧠
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Why might you want to use a custom memory allocator instead of relying 
          on the default <code>new</code> and <code>delete</code>?
        </li>
        <li>
          What are some potential downsides or things to consider when 
          implementing custom allocators?
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
            **1. Performance Optimization:** Custom allocators can be tailored 
            to specific allocation patterns, potentially reducing allocation 
            overhead and improving locality of reference.
            <br />
            **2. Memory Management Strategies:** You might need a specialized 
            allocator for tasks like garbage collection or memory pooling.
            <br />
            **3. Debugging and Profiling:** Custom allocators can help with 
            tracking memory usage, detecting leaks, and identifying allocation 
            bottlenecks.
          </p>
          <p>
            **2.  Complexity:** Custom allocators can be complex to implement 
            correctly and efficiently.
            <br />
            **Debugging:** Debugging issues in custom allocation code can be challenging. 
            <br />
            **Portability:**  Custom allocators might not be as portable 
            across different platforms or compilers.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default CustomMemoryAllocators;