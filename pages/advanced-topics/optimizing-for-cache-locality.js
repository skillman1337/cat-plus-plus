import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const OptimizingforCacheLocality = () => {
  const [showQuizSolution, setShowQuizSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Layout title="Optimizing for Cache Locality: Making Your C++ Code Lightning Fast">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-600">
        Optimizing for Cache Locality: Making Your C++ Code Lightning Fast
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg leading-relaxed">
        Imagine trying to bake a cake, but having to fetch ingredients
        individually from a pantry miles away for every single step. It'd take
        forever, right?  That's kind of how your computer feels when it has to
        constantly access data from RAM.  Cache locality is all about making
        sure the ingredients (your data) are close at hand when your CPU
        (the baker) needs them, resulting in much faster program execution.
      </p>

      {/* Code Example (if applicable) */}
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDarkReasonable}
        className="rounded mb-6"
      >
        {`#include <iostream>
#include <vector>
#include <chrono>

// Accessing elements row-wise (good cache locality)
double sumRowWise(const std::vector<std::vector<double>>& matrix) {
  int rows = matrix.size();
  int cols = matrix[0].size();
  double sum = 0.0;

  auto start = std::chrono::high_resolution_clock::now();

  for (int i = 0; i < rows; ++i) {
    for (int j = 0; j < cols; ++j) {
      sum += matrix[i][j];
    }
  }

  auto end = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed = end - start;
  std::cout << "Row-wise access time: " << elapsed.count() << " s\n";

  return sum;
}

// Accessing elements column-wise (poor cache locality)
double sumColumnWise(const std::vector<std::vector<double>>& matrix) {
  int rows = matrix.size();
  int cols = matrix[0].size();
  double sum = 0.0;

  auto start = std::chrono::high_resolution_clock::now();

  for (int j = 0; j < cols; ++j) {
    for (int i = 0; i < rows; ++i) {
      sum += matrix[i][j];
    }
  }

  auto end = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed = end - start;
  std::cout << "Column-wise access time: " << elapsed.count() << " s\n";

  return sum;
}

int main() {
  const int ROWS = 10000;
  const int COLS = 10000;

  // Initialize matrix
  std::vector<std::vector<double>> matrix(ROWS, std::vector<double>(COLS, 1.0));

  sumRowWise(matrix);
  sumColumnWise(matrix);

  return 0;
}`}
      </SyntaxHighlighter>

      {/* Explanation */}
      <p className="mb-4 text-lg leading-relaxed">
        In this example, we have two functions that calculate the sum of
        elements in a 2D matrix. <code>sumRowWise</code> iterates over the
        matrix row by row, while <code>sumColumnWise</code> iterates over it
        column by column. Although they achieve the same result, their
        performance can differ significantly due to cache locality.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        The key takeaway is that accessing memory linearly, like in{" "}
        <code>sumRowWise</code>, is much faster than jumping around randomly,
        as in <code>sumColumnWise</code>. This is because modern CPUs fetch
        data in blocks (cache lines) from RAM. When we access data sequentially,
        it's likely already in the cache, resulting in speedy retrieval.
        However, when accessing data out of order, the CPU might need to fetch
        new cache lines from RAM for every access, significantly slowing down
        the process.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Task: Analyze & Optimize
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        Let's put your newfound knowledge to the test! Suppose you are tasked
        with optimizing a piece of code that performs matrix multiplication. The
        current implementation iterates through the matrices in a manner that
        exhibits poor cache locality. Your goal is to refactor the code to
        improve its cache utilization and, consequently, its performance.
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
          Hint: Think about how you can rearrange the loops and data access
          patterns in the matrix multiplication algorithm to promote sequential
          memory access. Consider techniques like loop tiling or loop
          interchange.
        </p>
      )}

      {showSolution && (
        <SyntaxHighlighter
          language="cpp"
          style={atomOneDarkReasonable}
          className="rounded mb-6"
        >
          {`// Optimized matrix multiplication with loop tiling
void matrixMultiplyOptimized(const std::vector<std::vector<double>>& A,
                         const std::vector<std::vector<double>>& B,
                         std::vector<std::vector<double>>& C,
                         int tileSize) {
  int n = A.size();

  // Loop tiling
  for (int i = 0; i < n; i += tileSize) {
    for (int j = 0; j < n; j += tileSize) {
      for (int k = 0; k < n; k += tileSize) {
        // Perform multiplication within the tile
        for (int ii = i; ii < std::min(i + tileSize, n); ++ii) {
          for (int jj = j; jj < std::min(j + tileSize, n); ++jj) {
            for (int kk = k; kk < std::min(k + tileSize, n); ++kk) {
              C[ii][jj] += A[ii][kk] * B[kk][jj];
            }
          }
        }
      }
    }
  }
}`}
        </SyntaxHighlighter>
      )}

      {/* Quiz Time! */}
      <h2 className="text-2xl font-semibold mb-4 text-left text-blue-500">
        Quiz Time!
      </h2>

      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>
          Why is cache locality important for optimizing C++ code performance?
        </li>
        <li>
          Describe a technique you can use to improve cache locality in your
          code.
        </li>
        <li>
          How does the size of the cache affect the performance gains achieved
          through cache optimization?
        </li>
      </ul>

      {/* Solution Button */}
      <button
        onClick={() => setShowQuizSolution(!showQuizSolution)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300 mb-5"
      >
        {showQuizSolution ? "Hide Solutions" : "Show Solutions"}
      </button>

      {/* Solutions */}
      {showQuizSolution && (
        <div className="bg-gray-800 p-4 rounded mb-6 text-lg leading-relaxed">
          <p>
            **Answer 1:** Cache locality is crucial because it leverages the
            speed of accessing data from the cache, which is significantly
            faster than accessing data from main memory. When code exhibits good
            cache locality, the data it needs is more likely to be already
            present in the cache, reducing expensive memory accesses and
            boosting performance.
          </p>
          <p>
            **Answer 2:** One common technique is **loop tiling**. This involves
            breaking down large loops into smaller "tiles" or blocks, which
            allows the CPU to operate on a smaller set of data that can fit
            within the cache. Other techniques include **loop interchange** (changing the
            nesting order of loops) and **data restructuring** (reorganizing data
            structures to promote sequential access).
          </p>
          <p>
            **Answer 3:** The size of the cache directly influences the
            effectiveness of cache optimization. A larger cache can hold more
            data, increasing the likelihood of cache hits and reducing the need
            to access main memory. However, even with smaller caches, proper
            cache utilization through optimization techniques can still lead to
            substantial performance improvements.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default OptimizingforCacheLocality;