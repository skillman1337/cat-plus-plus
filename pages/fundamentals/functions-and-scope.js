// pages\fundamentals\functions-and-scope.js

import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const FunctionsAndScope = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);

  return (
    <Layout title="Functions and Scope: Organizing Your Code and Keeping Your Secrets Safe">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Functions and Scope: Your Code's Personal Assistant and Bodyguard 🕴️🔐
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Functions: The Code Ninjas That Get Things Done (Without Complaining) 🥷
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine having to repeat the same chunk of code over and over again like
        a broken record. It would be tedious, repetitive, and about as fun as
        watching paint dry. That's where functions come in. They're like
        reusable blocks of code that you can call upon whenever you need them,
        saving you time, effort, and sanity.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int calculateArea(int length, int width) { // Function definition
  int area = length * width;
  return area;
}

int main() {
  int result = calculateArea(5, 10); // Function call
  std::cout << "The area is: " << result << std::endl;
  return 0;
}
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, the "calculateArea" function takes two arguments
        (length and width), calculates the area, and returns the result. It's
        like a mini-program within your program, doing your bidding without
        complaint.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Scope: Your Code's Personal Bodyguard (Keeping Secrets Safe from Prying
        Eyes) 🛡️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Scope is like your code's personal bodyguard, ensuring that variables
        stay within their designated areas and don't get into any trouble. Think
        of it like this: each function has its own private room, and variables
        declared inside that room are like top-secret documents that can't be
        accessed from the outside.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  int x = 10; // This variable has global scope.

  {
    int y = 20; // This variable has block scope.
  }

  std::cout << x << std::endl; // This will print 10.
  // std::cout << y << std::endl; // This will cause an error! 'y' is out of scope.

  return 0;
}
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, the variable "x" has global scope, meaning it can be
        accessed from anywhere in the program. The variable "y," on the other
        hand, has block scope, meaning it can only be accessed within the curly
        braces where it's declared. Trying to access "y" outside of its scope
        will result in a compiler error faster than you can say "segmentation
        fault."
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! (Because What's a Coding Lesson Without a Little
        Interrogation?)
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Why are functions like the superheroes of code organization? (Hint:
          They promote reusability, reduce redundancy, and make your code easier
          to read and maintain.)
        </li>
        <li>
          What's the difference between global scope and local scope, and why is
          it important to understand the difference? (Hint: One is like a public
          park, the other is like your own private island. Choose wisely where
          you store your valuables.)
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
            <strong>1. Functions: The Code Superheroes:</strong> Functions
            promote code reusability, reduce redundancy, and make your code
            easier to read and maintain. They're like the superheroes of code
            organization, swooping in to save the day from spaghetti code and
            repetitive nightmares.
          </p>

          <p>
            <strong>2. Global vs. Local Scope:</strong> Global scope means a
            variable can be accessed from anywhere in the program, while local
            scope means a variable can only be accessed within the block of code
            where it's declared. Understanding the difference is crucial for
            preventing naming conflicts, improving code organization, and
            generally keeping your code from turning into a chaotic mess.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default FunctionsAndScope;
