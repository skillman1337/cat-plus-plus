import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SmartPointers = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Smart Pointers (unique_ptr, shared_ptr, weak_ptr): Taking Ownership in C++">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Smart Pointers (unique_ptr, shared_ptr, weak_ptr): Taking Ownership in C++
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        In C++, managing memory is like keeping track of your stuff after a big party – it can get messy!  Thankfully, smart pointers are here to help! 🧽🧹 They're like those responsible friends who volunteer to clean up afterwards, automatically taking care of memory allocation and deallocation. In this chapter, we'll meet the "Big Three" of smart pointers: <code>unique_ptr</code>, <code>shared_ptr</code>, and <code>weak_ptr</code>.  Get ready to say goodbye to memory leaks! 🎉
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>
#include <memory>

int main() {
  // unique_ptr: Exclusive Ownership 👑
  std::unique_ptr<int> uniquePtr(new int(42));
  std::cout << "Unique pointer value: " << *uniquePtr << std::endl; 

  // shared_ptr: Shared Ownership 🤝
  std::shared_ptr<std::string> sharedPtr1(new std::string("Hello"));
  std::shared_ptr<std::string> sharedPtr2 = sharedPtr1; // Sharing is caring!
  std::cout << "Shared pointer value (1): " << *sharedPtr1 << std::endl;
  std::cout << "Shared pointer value (2): " << *sharedPtr2 << std::endl;

  // weak_ptr: Observing Ownership 👀 (used with shared_ptr)
  std::shared_ptr<double> sharedPtr3(new double(3.14));
  std::weak_ptr<double> weakPtr(sharedPtr3);

  if (auto sharedPtr4 = weakPtr.lock()) { // Check if the object still exists
    std::cout << "Weak pointer accessed value: " << *sharedPtr4 << std::endl;
  } else {
    std::cout << "The object pointed to by weak_ptr is gone!" << std::endl;
  }

  return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        Let's break down the code:
        <ul>
          <li>
          We start by including the <code>&lt;memory&gt;</code> header for smart pointers.
          </li>
          <li>
          <code>unique_ptr</code>: Imagine you have a unique, one-of-a-kind collectible. Only one person can own it at a time.  That's <code>unique_ptr</code>!  It holds exclusive ownership of the pointer. When the <code>unique_ptr</code> goes out of scope, the memory it manages is automatically deleted.
          </li>
          <li>
          <code>shared_ptr</code>: Think of sharing a pizza with friends.  Everyone gets a slice, and you keep track of how many slices are left. 🍕  <code>shared_ptr</code> allows multiple pointers to manage the same object.  It keeps a reference count, and only when the last <code>shared_ptr</code> pointing to the object is destroyed is the memory actually freed.
          </li>
          <li>
          <code>weak_ptr</code>: This is like having a VIP pass to the pizza party. You can observe if there's any pizza left (if the object still exists) without claiming ownership. <code>weak_ptr</code> is used in conjunction with <code>shared_ptr</code> to prevent circular dependencies that could lead to memory leaks. 
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Design a Spaceship Factory
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Create a C++ program that simulates a spaceship factory. Use the following guidelines:
      </p>
      <ul>
        <li>
        Define a <code>Spaceship</code> class with basic attributes (e.g., model, fuel level).
        </li>
        <li>
        The factory should produce spaceships (using <code>new</code>) and store them using a <code>std::vector</code>.
        </li>
        <li>
        Implement functionality to launch a spaceship (which should transfer ownership of the spaceship from the factory to a <code>unique_ptr</code>).
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
          Hint: Remember that <code>std::move</code> can be used to transfer ownership from a <code>unique_ptr</code>.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>
#include <memory>
#include <vector>

class Spaceship {
public:
  std::string model;
  int fuel;

  Spaceship(const std::string& model, int fuel) : model(model), fuel(fuel) {}
};

class SpaceshipFactory {
public:
  std::unique_ptr<Spaceship> launchSpaceship(size_t index) {
    if (index < spaceships.size()) {
      auto spaceship = std::move(spaceships[index]); // Transfer ownership
      spaceships.erase(spaceships.begin() + index);
      return spaceship;
    } else {
      std::cout << "Invalid spaceship index!" << std::endl;
      return nullptr;
    }
  }

  void produceSpaceship(const std::string& model, int fuel) {
    spaceships.push_back(std::make_unique<Spaceship>(model, fuel));
  }

private:
  std::vector<std::unique_ptr<Spaceship>> spaceships; 
};

int main() {
  SpaceshipFactory factory;
  factory.produceSpaceship("Explorer X", 100);

  // Launch the spaceship!
  auto mySpaceship = factory.launchSpaceship(0); 
  if (mySpaceship) {
    std::cout << "Launching spaceship: " << mySpaceship->model << std::endl;
  }

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
          What is the main advantage of using smart pointers over raw pointers?
        </li>
        <li>
          Explain the difference between <code>unique_ptr</code> and <code>shared_ptr</code>. When would you use each?
        </li>
        <li>
          Can you create a <code>shared_ptr</code> from a <code>unique_ptr</code>? If yes, how?
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
            **1. Automatic Memory Management:** Smart pointers automatically handle memory allocation and deallocation, preventing memory leaks and dangling pointers, which are common problems with raw pointers.
          </p>
          <p>
            **2.  <code>unique_ptr</code> vs. <code>shared_ptr</code>:** 
            <ul>
              <li><code>unique_ptr</code>: Represents exclusive ownership – only one <code>unique_ptr</code> can point to an object at a time. Use it when you want a single, well-defined owner for a resource.</li>
              <li><code>shared_ptr</code>: Enables shared ownership – multiple <code>shared_ptr</code>s can point to the same object. Use it when you need multiple parts of your code to manage the lifetime of a resource.</li>
            </ul>
          </p>
          <p>
            **3. Creating a <code>shared_ptr</code> from a <code>unique_ptr</code>:** Yes, you can create a <code>shared_ptr</code> from a <code>unique_ptr</code> using <code>std::move()</code>. This transfers ownership from the <code>unique_ptr</code> (which will then become empty) to the newly created <code>shared_ptr</code>.
          </p>
        </div>
      )}

    </Layout>
  );
};

export default SmartPointers;