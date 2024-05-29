// pages\fundamentals\control-flow-if-else-switch-loops.js

import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ControlFlowIfElseSwitchLoops = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);

  return (
    <Layout title="Control Flow: If-Else, Switch, Loops - Because Your Code Needs to Make Decisions (and Repeat Itself)">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Control Flow: Teaching Your Code to Think (Well, Sort Of) 🤔
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        If-Else Statements: The Decision-Makers of Your Code (But Don't Ask Them
        for Life Advice) ⚖️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine your code is a choose-your-own-adventure book. If-else
        statements are the forks in the road, allowing your program to take
        different paths based on certain conditions. It's like giving your code
        a tiny brain (don't get too excited, it's still dumber than a bag of
        hammers).
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int age = 25;

if (age >= 18) {
  std::cout << "Congrats, you can vote! (And also rent a car, which is arguably more exciting.)" << std::endl;
} else {
  std::cout << "Sorry, kiddo, you're stuck watching cartoons for a few more years." << std::endl;
}
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, the code checks if the "age" variable is greater than
        or equal to 18. If it is, it prints a congratulatory message. Otherwise,
        it prints a condescending one. Hey, we're programmers, not motivational
        speakers.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Switch Statements: The Organized Sibling of If-Else (But Just as Prone
        to Existential Crises) 🗂️
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Switch statements are like the if-else statement's more organized
        sibling. They let you check a variable against multiple possible values
        and execute different code blocks based on the match. It's like having a
        drawer for each outfit instead of throwing all your clothes on the
        floor.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`int day = 3;

switch (day) {
  case 1:
    std::cout << "Monday: The day the coffee machine breaks." << std::endl;
    break;
  case 2:
    std::cout << "Tuesday: Still better than Monday, but only slightly." << std::endl;
    break;
  case 3:
    std::cout << "Wednesday: Hump day! Time for a celebratory donut." << std::endl;
    break;
  // ... other cases for the rest of the week ...
  default:
    std::cout << "Invalid day! Did you invent a new day of the week?" << std::endl;
}
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        See those "break" statements? They're crucial. Without them, your code
        will fall through all the cases like a runaway train. And trust me, you
        don't want to be on that train.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Loops: The Energizer Bunnies of Your Code (They Keep Going and Going...)
        🐰
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Loops are the workhorses of programming. They let you repeat a block of
        code multiple times, which is incredibly useful for things like
        processing data, iterating over arrays, and generally making your
        computer do your bidding.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`for (int i = 0; i < 10; i++) {
  std::cout << "I will not write infinite loops.  (At least, not today.)" << std::endl;
}

int count = 0;
while (count < 5) {
  std::cout << "This is getting repetitive..." << std::endl;
  count++;
}
`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        The "for" loop is like a well-oiled machine, repeating the code a
        specific number of times. The "while" loop, on the other hand, is like a
        dog chasing its tail – it keeps going until a certain condition is met.
        Just be careful not to create an infinite loop, or your computer might
        start smoking.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! (Because What's a Coding Lesson Without a Little
        Interrogation?)
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          When would you use a switch statement instead of an if-else statement,
          and why? (Hint: It's all about organization and readability, my
          friend.)
        </li>
        <li>
          What's the difference between a for loop and a while loop, and when
          would you use one over the other? (Hint: One is for counting sheep,
          the other is for chasing squirrels.)
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
            <strong>1. Switch vs. If-Else:</strong> Use a switch statement when
            you need to check a variable against multiple possible values. It's
            more concise and readable than a chain of if-else statements. Think
            of it like this: if-else is like rummaging through a messy drawer,
            while switch is like opening a well-organized toolbox.
          </p>

          <p>
            <strong>2. For Loops vs. While Loops:</strong> Use a for loop when
            you know how many times you want to repeat the code. Use a while
            loop when you want to repeat the code until a certain condition is
            met. It's like the difference between baking a cake (you know how
            many minutes it needs) and watching a movie (you don't know how long
            it will last).
          </p>
        </div>
      )}
    </Layout>
  );
};

export default ControlFlowIfElseSwitchLoops;
