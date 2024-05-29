import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MemoryPooling = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Memory Pooling: A Deep Dive">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Memory Pooling: Make Your C++ Code Lightning Fast ⚡
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're at a busy swimming pool. People are constantly getting
        in and out, splashing around, having a good time. Now, imagine if every
        time someone wanted to get in, the pool had to be filled up from
        scratch, and every time someone got out, the water was completely
        drained! That's how inefficient traditional memory allocation can be.
        Memory pooling is like having a pool with a clever lifeguard who knows
        how to keep the water level just right, so people can jump in and out
        quickly without any delays. This makes your C++ code supercharged!
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >{`// A simple example of a memory pool for a specific object type
#include <iostream>
#include <vector>

template <typename T>
class MemoryPool {
public:
  MemoryPool(size_t blockSize = 1024) : blockSize(blockSize) {
    allocateBlock();
  }

  ~MemoryPool() {
    for (auto& block : blocks) {
      delete[] block;
    }
  }

  T* allocate() {
    if (freeList.empty()) {
      allocateBlock();
    }
    T* obj = freeList.back();
    freeList.pop_back();
    return obj;
  }

  void deallocate(T* obj) {
    freeList.push_back(obj);
  }

private:
  void allocateBlock() {
    T* block = new T[blockSize];
    blocks.push_back(block);
    for (size_t i = 0; i < blockSize; ++i) {
      freeList.push_back(block + i);
    }
  }

  std::vector<T*> blocks;
  std::vector<T*> freeList;
  size_t blockSize;
};

struct MyObject {
  int data;
};

int main() {
  MemoryPool<MyObject> pool;

  // Allocate and use objects from the pool
  MyObject* obj1 = pool.allocate();
  obj1->data = 42;

  MyObject* obj2 = pool.allocate();
  obj2->data = 99;

  // Deallocate objects back to the pool
  pool.deallocate(obj1);
  pool.deallocate(obj2);

  return 0;
}`}</SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we create a simple memory pool for objects of type{" "}
        <code className="font-bold text-lg text-red-400">MyObject</code>. The
        <code className="font-bold text-lg text-red-400">MemoryPool</code>{" "}
        class manages blocks of memory and provides{" "}
        <code className="font-bold text-lg text-red-400">allocate()</code> and{" "}
        <code className="font-bold text-lg text-red-400">deallocate()</code>{" "}
        functions to get and release objects from the pool. This way, we reduce
        the overhead of frequent memory allocations and deallocations, making
        our code faster, especially when dealing with a large number of
        objects.
      </p>

      <p>Please make sure you escape -&gt; &lt;- for-example: &gt; &lt;</p>

      {/* More content, explanations, code examples as needed... */}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Build a Custom Memory Pool
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Now it's your turn to dive in! Try to implement your own memory pool
        class. You can start with the example above and expand on it.
        Challenge yourself to add features like:
      </p>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>Support for variable object sizes.</li>
        <li>Thread safety for concurrent access.</li>
        <li>Statistics tracking for memory usage.</li>
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
          Hint: Think about using data structures like linked lists or free
          lists to manage your memory blocks efficiently.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >{`#include <iostream>
#include <list>
#include <mutex>

template <typename T>
class ThreadSafeMemoryPool {
public:
  ThreadSafeMemoryPool(size_t blockSize = 1024) : blockSize(blockSize) {}

  ~ThreadSafeMemoryPool() {
    std::lock_guard<std::mutex> lock(mutex);
    for (auto& block : blocks) {
      delete[] block;
    }
  }

  T* allocate() {
    std::lock_guard<std::mutex> lock(mutex);
    if (freeList.empty()) {
      allocateBlock();
    }
    T* obj = freeList.back();
    freeList.pop_back();
    return obj;
  }

  void deallocate(T* obj) {
    std::lock_guard<std::mutex> lock(mutex);
    freeList.push_back(obj);
  }

private:
  void allocateBlock() {
    T* block = new T[blockSize];
    blocks.push_back(block);
    for (size_t i = 0; i < blockSize; ++i) {
      freeList.push_back(block + i);
    }
  }

  std::vector<T*> blocks;
  std::list<T*> freeList;
  size_t blockSize;
  std::mutex mutex;
};

struct MyObject {
  int data;
};

int main() {
  ThreadSafeMemoryPool<MyObject> pool;

  // Allocate and use objects from the pool
  MyObject* obj1 = pool.allocate();
  obj1->data = 42;

  MyObject* obj2 = pool.allocate();
  obj2->data = 99;

  // Deallocate objects back to the pool
  pool.deallocate(obj1);
  pool.deallocate(obj2);

  return 0;
}`}</SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Why is memory pooling particularly useful in game development or
          high-performance scenarios?
        </li>
        <li>
          What are some potential drawbacks of using memory pools?
        </li>
        <li>
          How does a memory pool help in reducing memory fragmentation?
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
            **1. Performance Boost:** In games and high-performance
            applications, frequent memory allocations can cause slowdowns.
            Memory pools pre-allocate memory, eliminating this bottleneck and
            leading to smoother performance.
          </p>
          <p>
            **2. Potential Drawbacks:**
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>
              **Fixed Size:** Basic memory pools can be inflexible if object
              sizes vary greatly.
            </li>
            <li>
              **Memory Overhead:** If not managed carefully, pools can lead to
              unused memory.
            </li>
          </ul>
          <p>
            **3. Reduced Fragmentation:** When memory is allocated and
            deallocated repeatedly, it can become fragmented (split into small
            chunks). Memory pools prevent this by allocating from a dedicated
            block, ensuring efficient memory utilization.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default MemoryPooling;
