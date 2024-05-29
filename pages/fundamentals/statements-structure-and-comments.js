// pages\fundamentals\statements-structure-and-comments.js

import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const StatementsStructureComments = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);

  return (
    <Layout title="Statements, Structure, and Comments: The ABCs of Not Writing Garbage Code">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Statements, Structure, and Comments: Your Code's Inner Monologue (and
        Why You Should Care) 🗣️🧠
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        From Gibberish to Grammar: Giving Your Code a Structure That Doesn't
        Suck 🏗️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Alright, coding cadets, let's talk about how to make your code less like
        a toddler's finger-painting session and more like a masterpiece worthy
        of the Louvre (or at least a passing grade). We're diving into the world
        of statements, structure, and comments – the holy trinity of readable
        code.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Statements: Your Code's Marching Orders (One Command at a Time) 🪖
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Think of statements as the individual commands you bark at your
        computer. Each statement tells your program to do something specific,
        like a tiny, obedient robot. Want to declare a variable? That's a
        statement. Want to print something to the console? Statement! Want to
        make your computer question its existence? You guessed it – another
        statement.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int score = 42; // This statement declares an integer variable named 'score' and sets it to 42.  Go you!
std::cout << "Hello, world!"; // This statement tells the computer to print "Hello, world!" to the console.  Groundbreaking.
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        See those semicolons (;) at the end of each statement? They're like the
        period at the end of a sentence. They tell the compiler, "Okay, I'm done
        with this thought. Time for the next one." Forget them, and your
        compiler will unleash its wrath upon you. You've been warned.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Structure: Organizing the Chaos (Or at Least Trying To) 🗂️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Now, imagine trying to read a book where all the sentences are just
        jumbled together in one giant paragraph. That's what your code looks
        like without structure. It's a nightmare. That's where blocks come in.
        Blocks are groups of statements that belong together, like chapters in a
        book or episodes in a Netflix binge-watching session.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() { // This is the main function.  It's where the magic happens.
  { // This is a block.  It groups these statements together.
    int a = 10;
    int b = 20;
    std::cout << a + b << std::endl;
  }

  { // This is another block.  It's independent of the first one.
    std::string message = "Coding is fun!";
    std::cout << message << std::endl;
  }

  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        See those curly braces ({})? They're like the walls that separate
        different rooms in your code mansion. Each block has its own little
        world, and statements within a block can see and talk to each other. But
        try to access something from another block, and you'll get a compiler
        error faster than you can say "segmentation fault."
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Comments: Leaving Breadcrumbs for Your Future Self (and Other Lost
        Souls) 🧭
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's be real, even the most beautiful code can look like gibberish a
        few weeks later. That's where comments come in. Comments are like little
        love notes you leave for yourself (and anyone else brave enough to
        venture into your code). They don't affect how your code runs, but they
        explain what the hell is going on.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  // This program calculates the area of a rectangle.
  int length = 10; // Length of the rectangle
  int width = 5;  // Width of the rectangle
  int area = length * width; // Calculate the area

  std::cout << "The area is: " << area << std::endl;

  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        See those double slashes (//)? That's how you tell the compiler, "Hey,
        ignore this line, it's just for humans." Use comments to explain your
        thought process, document your code, and leave witty remarks for your
        future self. Trust me, you'll thank yourself later.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! (Because What's a Coding Lesson Without a Little
        Interrogation?)
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What's the difference between a statement and a block, and why should
          you care? (Hint: One is like a sentence, the other is like a
          paragraph. Choose wisely.)
        </li>
        <li>
          Why are comments like the unsung heroes of the coding world? (Hint:
          They make your code less painful to read, even if nobody wants to
          admit it.)
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
            <strong>1. Statements vs. Blocks:</strong> Statements are like
            individual commands, while blocks are groups of statements that
            belong together. Think of it like this: a statement is a single
            brick, and a block is a wall made of bricks. You need both to build
            a house (or, you know, a program).
          </p>

          <p>
            <strong>2. Comments: The Unsung Heroes:</strong> Comments are
            important because they make your code understandable to humans.
            They're like the subtitles for your code, explaining the plot twists
            and character motivations. Without comments, your code is like a
            movie in a foreign language – you might be able to follow along, but
            you'll miss all the nuances.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default StatementsStructureComments;
