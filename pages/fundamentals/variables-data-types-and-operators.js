// pages\fundamentals\variables-data-types-and-operators.js
// pages\fundamentals\variables-data-types-and-operators.js

import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const VariablesDataTypesOperators = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);

  return (
    <Layout title="Variables, Data Types, and Operators: The Building Blocks of Your Code's Universe">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Variables, Data Types, and Operators: The Holy Trinity of Making Your
        Code Do Stuff ✨
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Variables: The Digital Tupperware of Your Code 📦
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine trying to cook a gourmet meal without any containers. You'd have
        ingredients scattered everywhere, sauce dripping off the counter, and a
        one-way ticket to a kitchen nightmare. That's what programming is like
        without variables. They're the containers that hold your data, keeping
        your code organized and your sanity intact.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int age = 25; // This variable holds an integer (whole number).
double bankBalance = 1000000.50; // This variable holds a double (decimal number).  Hey, a programmer can dream, right?
std::string name = "Neo"; // This variable holds a string (text).
bool isAwesome = true; // This variable holds a boolean (true or false).  Spoiler alert: you're awesome.
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        See those words like "int," "double," "string," and "bool"? Those are
        data types. They tell the compiler what kind of data a variable can
        hold. It's like labeling your Tupperware so you don't accidentally put
        your leftover pizza in with your ice cream. (Unless you're into that
        sort of thing. No judgment here.)
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Operators: The Mathematical Ninjas of Your Code 🥷
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Operators are the symbols that let you perform operations on your data.
        They're like the knives, forks, and spoons of the coding world, allowing
        you to slice, dice, and manipulate your data with surgical precision.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int a = 10 + 5; // Addition: a will be 15.
int b = 10 - 5; // Subtraction: b will be 5.
int c = 10 * 5; // Multiplication: c will be 50.
int d = 10 / 5; // Division: d will be 2.
int e = 10 % 3; // Modulo (remainder): e will be 1.
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        But wait, there's more! Operators aren't just for math. You can use them
        to compare values, combine strings, and even manipulate bits like a
        digital wizard.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! (Because What's a Coding Lesson Without a Little
        Interrogation?)
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What's the difference between a variable and a data type, and why is
          it important to use the right one? (Hint: One is the container, the
          other is the label. Don't mix up your leftovers!)
        </li>
        <li>
          What are some different types of operators, and what can you do with
          them? (Hint: They're not just for math, but they can make your code do
          some pretty magical things.)
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
          <p>
            <strong>1. Variables vs. Data Types:</strong> A variable is like a
            container that holds data, while a data type is like a label that
            tells the compiler what kind of data the container can hold. Using
            the right data type ensures that your data is stored and manipulated
            correctly. It's like putting the right lid on your Tupperware – you
            don't want your spaghetti sauce spilling all over your fridge.
          </p>

          <p>
            <strong>2. Operators: The Swiss Army Knives of Code:</strong>
            Operators are symbols that let you perform operations on your data.
            There are arithmetic operators (+, -, *, /, %), comparison operators
            (==, !=, &gt;, &lt;, &gt;=, &lt;=), logical operators (&&, ||, !),
            bitwise operators (&, |, ^, ~, &lt;&lt;, &gt;&gt;), and more.
            They're the tools that let you manipulate your data and make your
            code do interesting things.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default VariablesDataTypesOperators;
