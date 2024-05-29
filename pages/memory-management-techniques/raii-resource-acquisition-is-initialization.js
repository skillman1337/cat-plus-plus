import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const RAII = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="RAII (Resource Acquisition Is Initialization): Keeping Your C++ Code Clean and Safe">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        RAII (Resource Acquisition Is Initialization): Keeping Your C++ Code
        Clean and Safe
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're throwing a party 🎉. You wouldn't want to leave the
        cleanup for your guests, right? That's essentially what RAII is all
        about in C++: cleaning up resources like memory or files automatically
        🧹. No more memory leaks or dangling pointers!
      </p>

      {/* Code Example */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>
#include <fstream>

class FileHandler {
public:
    FileHandler(const std::string& filename) : file(filename) {
        if (!file.is_open()) {
            throw std::runtime_error("Failed to open file!");
        }
        std::cout << "File opened successfully.\\n"; 
    }

    ~FileHandler() {
        if (file.is_open()) {
            file.close();
            std::cout << "File closed successfully.\\n";
        }
    }

private:
    std::fstream file;
};

int main() {
    try {
        FileHandler fh("example.txt");
        // ... do something with the file ...
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << '\\n';
    } 
    // No need to explicitly close the file here, 
    // the destructor of FileHandler will handle it!
    return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, the{" "}
        <code className="font-bold text-lg text-red-400">FileHandler</code>{" "}
        class acquires the resource (the file) in its constructor and releases
        it in its destructor. This ensures that even if an exception occurs, the
        file is closed gracefully when the{" "}
        <code className="font-bold text-lg text-red-400">FileHandler</code>{" "}
        object goes out of scope.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Build Your Own Smart Pointer!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's simplify memory management. Your mission is to create a basic{" "}
        <code className="font-bold text-lg text-red-400">SmartPointer</code>{" "}
        class that automatically deallocates the memory it points to when it's
        no longer needed.
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
          Hint: Think about using a raw pointer inside your{" "}
          <code className="font-bold text-lg text-red-400">SmartPointer</code>{" "}
          class. The constructor should allocate memory, and the destructor
          should deallocate it.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>

template <typename T>
class SmartPointer {
public:
    SmartPointer(T* ptr = nullptr) : data(ptr) {}

    ~SmartPointer() {
        delete data;
    }

    T* operator->() { return data; }
    const T* operator->() const { return data; }

private:
    T* data;
};

int main() {
    SmartPointer<int> ptr(new int(10));
    std::cout << *ptr; // Output: 10 
    return 0; 
}
`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>Why is RAII important for preventing resource leaks?</li>
        <li>
          Can you give an example of a resource other than memory or files that
          can be managed using RAII?
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
            RAII ensures resources are released automatically when they're no
            longer needed, even if errors occur. This is because destructors are
            called automatically when objects go out of scope.
          </p>
          <p>
            Network sockets, database connections, mutex locks, and more can be
            managed using RAII.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default RAII;
