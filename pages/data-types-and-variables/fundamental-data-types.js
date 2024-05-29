import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const FundamentalDataTypes = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Fundamental Data Types: The Building Blocks of C++">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Fundamental Data Types: The Building Blocks of C++
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're building a house. You wouldn't start by randomly
        slapping bricks together, would you? You need to know what kind of
        materials you're working with—bricks, wood, cement—and how to use them
        correctly. The same goes for programming! In C++, fundamental data
        types are like those building blocks. They define the type of data a
        variable can hold and how it can be used. In this chapter, we'll
        explore these essential data types and understand how they form the
        foundation of your C++ programs. 🏡🧱
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Integers: The Number Crunchers
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's start with the basics—integers. As the name suggests, integers
        represent whole numbers, both positive and negative, without any
        decimals. Think of them as your reliable tools for counting,
        calculating, and keeping track of things like the number of players in a
        game, the score in a basketball match, or the number of cats you wish
        you had (don't worry, I'm right there with you! 🐈).
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  int number_of_cats = 7; // I can dream, can't I?
  int high_score = 9999; 
  int temperature = -5; // Brr, it's cold!

  std::cout << "Number of cats (in my dreams): " << number_of_cats << std::endl;
  std::cout << "High score: " << high_score << std::endl;
  std::cout << "Temperature: " << temperature << std::endl;

  return 0; 
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, we declare integer variables using the keyword{" "}
        <code className="font-bold text-lg text-red-400">int</code>. We then
        assign different values to them using the assignment operator (
        <code className="font-bold text-lg text-red-400">=</code>). Finally, we
        use{" "}
        <code className="font-bold text-lg text-red-400">std::cout</code> to
        display the values stored in these variables.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Characters: Single Letters, Big Impact
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Next up, we have characters! These are represented by the{" "}
        <code className="font-bold text-lg text-red-400">char</code> data type
        and hold single characters enclosed in single quotes (
        <code className="font-bold text-lg text-red-400">' '</code>). Think of
        them as the individual letters, numbers, symbols, and even spaces that
        make up words, sentences, and any text you can think of.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  char initial = 'J';
  char favorite_punctuation = '!'; 

  std::cout << "My initial is: " << initial << std::endl;
  std::cout << "I really like " << favorite_punctuation 
            << " It's full of excitement" << favorite_punctuation << std::endl;

  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        Here, we declare character variables{" "}
        <code className="font-bold text-lg text-red-400">initial</code> and{" "}
        <code className="font-bold text-lg text-red-400">
          favorite_punctuation
        </code>{" "}
        and assign them character values. Remember, single quotes are crucial
        for characters!
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Your First C++ Program
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        Now it's your turn to apply what you've learned! Write a C++ program
        that declares an integer variable called{" "}
        <code className="font-bold text-lg text-red-400">age</code> and a
        character variable called{" "}
        <code className="font-bold text-lg text-red-400">first_initial</code>.
        Assign your age to the{" "}
        <code className="font-bold text-lg text-red-400">age</code> variable and
        the first initial of your name to the{" "}
        <code className="font-bold text-lg text-red-400">
          first_initial
        </code>{" "}
        variable. Finally, use{" "}
        <code className="font-bold text-lg text-red-400">std::cout</code> to
        display your age and first initial in a creative and interesting
        sentence. Be imaginative and have fun with it! 🚀
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
          Hint: Remember to use the correct syntax for declaring variables,
          assigning values, and using{" "}
          <code className="font-bold text-lg text-red-400">std::cout</code>.
          Don't forget to include the necessary header file (
          <code className="font-bold text-lg text-red-400">
            #include &lt;iostream&gt;
          </code>
          ) at the beginning of your code.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`#include <iostream>

          int main() {
            int age = 25; // Replace with your actual age
            char first_initial = 'A'; // Replace with the first initial of your name
          
            std::cout << "My name starts with the letter " << first_initial 
                      << " and I'm " << age << " years young!" << std::endl;
          
            return 0;
          }`}
        </SyntaxHighlighter>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What is the difference between an{" "}
          <code className="font-bold text-lg text-red-400">int</code> and a{" "}
          <code className="font-bold text-lg text-red-400">char</code> data
          type in C++?
        </li>
        <li>
          How do you declare a character variable in C++? Provide an example.
        </li>
        <li>
          What is the purpose of the{" "}
          <code className="font-bold text-lg text-red-400">std::cout</code>{" "}
          object in C++?
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
            1. An <code className="font-bold text-lg text-red-400">int</code>{" "}
            data type stores whole numbers, while a{" "}
            <code className="font-bold text-lg text-red-400">char</code> data
            type stores single characters like letters, numbers, or symbols.
          </p>
          <p>
            2. To declare a character variable, you use the keyword{" "}
            <code className="font-bold text-lg text-red-400">char</code>{" "}
            followed by the variable name and assign it a character value
            enclosed in single quotes. For example:{" "}
            <code className="font-bold text-lg text-red-400">
              char my_grade = 'A';
            </code>
            .
          </p>
          <p>
            3. The{" "}
            <code className="font-bold text-lg text-red-400">std::cout</code>{" "}
            object is used to display output to the console in C++. It's a
            handy tool for printing messages, values, and results to the user.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default FundamentalDataTypes;
