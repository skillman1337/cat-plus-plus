// components/SideBar.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Utility function to format chapter titles into valid URLs
const formatChapterPath = (chapter) => {
  return chapter
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

const SideBar = ({ isOpen, setIsOpen }) => {
  const [openTopicIndex, setOpenTopicIndex] = useState(null);
  const [topics, setTopics] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch topics data from the generated JSON file
    const fetchTopics = async () => {
      try {
        const response = await fetch("/topics.json"); // Assuming topics.json is at the root
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    // Determine which topic and chapter should be open based on the current path
    if (topics.length > 0) {
      topics.forEach((topic, index) => {
        topic.chapters.forEach((chapter) => {
          const chapterPath = `/${topic.category}/${formatChapterPath(
            chapter
          )}`;
          if (router.pathname === chapterPath) {
            setOpenTopicIndex(index);
          }
        });
      });
    }
  }, [router.pathname, topics]);

  const toggleTopic = (index) => {
    setOpenTopicIndex(openTopicIndex === index ? null : index);
  };

  return (
    <div
      className={`w-64 pb-16 fixed h-full flex bg-gray-900 flex-col text-white transition-all duration-300 shadow-lg transform ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:left-0 left-0 top-14 md:top-20 z-40`}
    >
      <nav className="flex-1 overflow-y-auto">
        {topics.map((topic, index) => (
          <div key={index} className="p-2">
            <div
              className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-500 rounded bg-gray-700"
              onClick={() => toggleTopic(index)}
            >
              <h2 className="text-sm font-bold truncate">{topic.title}</h2>
              <span className="text-yellow-500">
                {openTopicIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* Chapters */}
            <ul className="mt-2 space-y-2">
              {openTopicIndex === index &&
                topic.chapters.map((chapter, idx) => {
                  const chapterPath = `/${topic.category}/${formatChapterPath(
                    chapter
                  )}`;
                  const isActive = router.pathname === chapterPath;

                  return (
                    <li
                      key={idx}
                      className={`text-sm hover:bg-gray-800 p-2 rounded transition-colors duration-200 ${
                        isActive ? "bg-gray-800" : ""
                      }`}
                    >
                      <Link href={chapterPath} legacyBehavior>
                        <a className="block truncate">{chapter}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
