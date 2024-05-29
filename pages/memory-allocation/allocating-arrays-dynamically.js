import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const AllocatingArraysDynamically = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Allocating Arrays Dynamically: Unlocking Memory's Potential">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Allocating Arrays Dynamically: Unlocking Memory's Potential
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine you're baking a cake, but you don't know how many people
        will show up. Do you bake a tiny cupcake or a giant multi-tiered
        masterpiece? 🤔 In C++, static arrays are like pre-baked cakes - their
        size is fixed at compile time. But what if you need a more flexible
        solution? That's where dynamic memory allocation comes in! 🎉
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        With dynamic allocation, you can create arrays at runtime, tailoring
        their size to the amount of data you have, just like adjusting your
        cake recipe based on the number of guests! This chapter will teach you
        the magic spell (well, keywords) to wield this power using{" "}
        <code className="font-bold text-lg text-red-400">new</code> and{" "}
        <code className="font-bold text-lg text-red-400">delete</code>. 🚀
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>

int main() {
  int size;

  std::cout << "How many guests are coming to the party? ";
  std::cin >> size;

  // Dynamically allocate an array of integers
  int* partyGuests = new int[size]; 

  // Now you can use partyGuests[0], partyGuests[1], etc.
  // ... (add your party planning logic here!)

  // Remember to clean up after the party!
  delete[] partyGuests; 

  return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, we ask the user for the number of party guests (
        <code className="font-bold text-lg text-red-400">size</code>) and then
        create an array named{" "}
        <code className="font-bold text-lg text-red-400">partyGuests</code>{" "}
        dynamically using{" "}
        <code className="font-bold text-lg text-red-400">new int[size]</code>.
        This allocates enough memory to store{" "}
        <code className="font-bold text-lg text-red-400">size</code> number of
        integers. Don't forget to use{" "}
        <code className="font-bold text-lg text-red-400">delete[] partyGuests;</code>{" "}
        to release the memory when you're done with the party! 🎉
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Explanation using -&gt; &lt;- has to be escaped: &gt; &lt;
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Plan the Party Menu!
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Now it's your turn to be the party planner! 🎊 You need to create a
        program that:
      </p>

      <ol className="list-decimal list-inside mb-4 text-lg leading-relaxed ml-6">
        <li>Asks the user for the number of dishes on the menu.</li>
        <li>
          Dynamically allocates an array of strings to store the dish names.
        </li>
        <li>
          Prompts the user to enter each dish name and stores it in the array.
        </li>
        <li>Displays the party menu with all the dishes.</li>
        <li>Remember to free the allocated memory.</li>
      </ol>

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
          Hint: You'll need to use the{" "}
          <code className="font-bold text-lg text-red-400">&lt;string&gt;</code>{" "}
          header for string manipulation and might want to use a loop to get
          all the dish names from the user. 😉
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

using namespace std;

int main() {
  int numDishes;

  cout << "How many dishes are on the menu? ";
  cin >> numDishes;

  // Dynamically allocate an array of strings
  string* menu = new string[numDishes];

  cout << "Enter the name of each dish:\n";
  for (int i = 0; i < numDishes; ++i) {
    cout << "Dish " << i + 1 << ": ";
    cin.ignore(); // Consume the newline character
    getline(cin, menu[i]);
  }

  cout << "\nParty Menu:\n";
  for (int i = 0; i < numDishes; ++i) {
    cout << "- " << menu[i] << endl;
  }

  // Free the allocated memory
  delete[] menu;

  return 0;
}`}
        </SyntaxHighlighter>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          What keyword is used to allocate memory dynamically in C++?
        </li>
        <li>
          What is the purpose of the{" "}
          <code className="font-bold text-lg text-red-400">
            delete[]
          </code>{" "}
          operator?
        </li>
        <li>
          What happens if you forget to free dynamically allocated memory?
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
            1. The keyword used to allocate memory dynamically is{" "}
            <code className="font-bold text-lg text-red-400">new</code>.
          </p>
          <p>
            2. The{" "}
            <code className="font-bold text-lg text-red-400">delete[]</code>{" "}
            operator is used to deallocate memory that was dynamically
            allocated using{" "}
            <code className="font-bold text-lg text-red-400">new[]</code>.
            This releases the memory back to the system.
          </p>
          <p>
            3. If you forget to free dynamically allocated memory, it leads
            to a memory leak. This means that the memory remains occupied even
            though it's no longer needed, potentially causing your program to
            slow down or even crash if it runs out of memory.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default AllocatingArraysDynamically;