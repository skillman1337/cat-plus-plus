import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MemoryMappedFiles = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Memory-Mapped Files: Your Data Autobahn">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Memory-Mapped Files: Your Data Autobahn 💨
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        Imagine needing to share a huge file with another program, maybe
        a massive dataset for analysis. Copying it back and forth would be
        like using carrier pigeons in the age of the internet! That's where
        memory-mapped files come in. They're like building a direct data
        highway between your program and the file, letting you access and
        modify its contents with lightning speed.
      </p>

      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>
#include <fstream>
#include <sys/mman.h> // For mmap
#include <sys/stat.h> // For file stats
#include <fcntl.h>     // For file control operations

int main() {
    // 1. Open the file
    const char* filename = "my_data.txt";
    int fd = open(filename, O_RDWR); // Open for reading and writing
    if (fd == -1) {
        std::cerr << "Error opening file!" << std::endl;
        return 1;
    }

    // 2. Get the file size
    struct stat file_info;
    if (fstat(fd, &file_info) == -1) {
        std::cerr << "Error getting file info!" << std::endl;
        close(fd);
        return 1;
    }
    size_t file_size = file_info.st_size;

    // 3. Memory-map the file
    void* mapped_data = mmap(
        nullptr,              // System chooses address
        file_size,            // Size of the mapping
        PROT_READ | PROT_WRITE, // Allow reading and writing
        MAP_SHARED,          // Changes are reflected in the file
        fd,                  // File descriptor
        0                    // Offset (start at the beginning)
    );
    if (mapped_data == MAP_FAILED) {
        std::cerr << "mmap failed!" << std::endl;
        close(fd);
        return 1;
    }

    // 4. Now you can access the file data like a regular array!
    char* data_ptr = static_cast<char*>(mapped_data);
    for (size_t i = 0; i < file_size; ++i) {
        std::cout << data_ptr[i]; 
    }
    std::cout << std::endl;

    // 5. Don't forget to unmap when done
    munmap(mapped_data, file_size);
    close(fd);
    return 0;
}`}
      </SyntaxHighlighter>

      <p className="mb-4 text-lg leading-relaxed">
        In this example, we use <code className="font-bold text-lg text-red-400">mmap</code> to map a
        file into memory. Think of <code className="font-bold text-lg text-red-400">mmap</code> as the construction crew
        building that data highway.  Once mapped, we can access and modify the
        file content through the <code className="font-bold text-lg text-red-400">data_ptr</code> like a normal array, without
        the overhead of constantly reading from and writing to the disk.
        It's super efficient! Just remember to <code className="font-bold text-lg text-red-400">munmap</code> when you're
        done to "deconstruct" the highway and free up resources.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Turbocharge Your File Editing 
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's put your newfound memory-mapping powers to the test! Your mission:
        modify the code example to replace the 10th character in "my_data.txt"
        with an exclamation mark (!). Remember, you're working directly with
        the memory-mapped file, so be careful!
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
          Hint: Think of how you'd access and modify a specific element in a
          regular C++ array. The memory-mapped file works similarly!
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`// ... (previous code) ...

    // Modify the 10th character (index 9)
    if (file_size > 9) {
        data_ptr[9] = '!';
    }

// ... (rest of the code) ...`}
        </SyntaxHighlighter>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time! 🤔
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Why are memory-mapped files faster for some tasks than directly
          reading and writing to files?
        </li>
        <li>
          What happens if you modify the memory-mapped region of a file, and
          the program crashes before you call <code className="font-bold text-lg text-red-400">munmap</code>?
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
            **Answer 1:** Memory-mapped files reduce the need to copy data
            between the disk and memory. The operating system cleverly handles
            this, making it seem like the file data is directly in your program's
            memory space.
          </p>
          <p>
            **Answer 2:**  The behavior can be system-dependent, but often
            the changes might not be fully written back to the file. It's
            crucial to unmap the file properly to ensure data integrity!
          </p>
        </div>
      )}
    </Layout>
  );
};

export default MemoryMappedFiles;
