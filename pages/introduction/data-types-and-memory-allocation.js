import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const DataTypesandMemoryAllocation = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Data Types and Memory Allocation: Building Blocks of Your Code">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Data Types and Memory Allocation: Building Blocks of Your Code
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine a computer's memory like a giant warehouse 🏢.  To store things
        efficiently, you need different sized boxes 📦. Data types are like
        these boxes, defining what kind of data (numbers, letters, etc.) can
        be stored and how much space they take up. 
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        The Fantastic Five: Common Data Types
      </h2>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          <b>int:</b> For whole numbers - think of it as your go-to box for
          counting things (like the number of cookies you want to eat 🍪). 
        </li>
        <li>
          <b>double:</b> Need decimals? This one's got you covered for numbers
          with fractional parts (like the price of a latte ☕).
        </li>
        <li>
          <b>char:</b> A single character, like a letter, number, or symbol.
          Think of it as a tiny box for just one piece of text (like the
          first letter of your name!). 
        </li>
        <li>
          <b>bool:</b>  A true/false value.  Is the cookie delicious? True! 
          Is the coffee cold? False! 😔
        </li>
        <li>
          <b>string:</b> This one's not a primitive type but is super useful. 
          It holds a sequence of characters, perfect for storing words or
          sentences (like your favorite programming quote!).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Memory Allocation: Finding the Right Space
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        When you create a variable in C++, you're essentially asking the
        computer to reserve a box in its memory warehouse. Here's the catch:
        you need to tell it what kind of box you need (data type) so it
        allocates the right amount of space.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int age = 25;  // Reserves a box big enough for an integer
        double price = 9.99; // A slightly larger box for a decimal number
        char grade = 'A'; // A tiny box for a single character`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Recipe for Success
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Let's create a program that stores and displays information about
        your favorite cookie recipe!  You'll need variables for:
      </p>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          The name of the cookie (string)
        </li>
        <li>
          The main ingredient (string)
        </li>
        <li>
          Baking temperature in Celsius (int)
        </li>
        <li>
          Baking time in minutes (int)
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
          Remember how to declare variables of different types? Think about what
          type of data each piece of information represents. 
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>
#include <string>

int main() {
    std::string cookieName = "Chocolate Chip Delight";
    std::string mainIngredient = "Chocolate Chips";
    int bakingTemperature = 180; // Celsius
    int bakingTime = 12; // Minutes

    std::cout << "My favorite cookie is: " << cookieName << std::endl;
    std::cout << "Main ingredient: " << mainIngredient << std::endl;
    std::cout << "Bake at " << bakingTemperature << " degrees Celsius ";
    std::cout << "for " << bakingTime << " minutes." << std::endl; 

    return 0; 
}`}
        </SyntaxHighlighter>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What data type would you use to store the number of students in a
          classroom?
        </li>
        <li>
          What's the difference between an 'int' and a 'double'?
        </li>
        <li>
          How do you declare a variable to store a single character, like the
          letter 'X'?
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
          <p>1. You would use the 'int' data type to store the number of students.</p>
          <p>
            2. An 'int' stores whole numbers, while a 'double' can store numbers
            with decimal points.
          </p>
          <p>
            3. You declare a character variable like this: 
            <code className="font-bold text-lg text-red-400"> char myChar = 'X'; </code>
          </p>
        </div>
      )}
    </Layout>
  );
};

export default DataTypesandMemoryAllocation;