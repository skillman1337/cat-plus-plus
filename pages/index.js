// pages/index.js

import React from "react";
import Link from "next/link";
import Lottie from "react-lottie";
import * as catAnimationData from "../animations/cat.json";
import topics from "../public/topics.json";

const formatChapterPath = (chapter) => {
  return chapter
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

const Page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: catAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const firstTopic = topics[0];
  const firstChapterPath = formatChapterPath(firstTopic.chapters[0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 bg-gray-900">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-8 text-yellow-500 drop-shadow-lg text-center">
        Welcome to CAT++
      </h1>

      <p className="text-lg md:text-2xl mb-4 md:mb-8 text-gray-300 text-center">
        Learn C++ with memes and cats!
      </p>

      <div className="w-full md:w-64 h-auto md:h-64 mb-4 md:mb-8">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>

      <Link href={`/${firstTopic.category}/${firstChapterPath}`} legacyBehavior>
        <a className="bg-purple-600 hover:bg-purple-700 text-white font-bold w-full md:w-1/4 text-center px-6 py-3 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
          Get Started
        </a>
      </Link>
    </div>
  );
};

export default Page;
