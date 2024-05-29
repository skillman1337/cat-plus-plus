// components/Layout.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ children, defaultCode = "" }) => {
  const [code, setCode] = defaultCode ? useState(defaultCode) : useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Sidebar closed by default on mobile
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const elementId = router.asPath.split("#")[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        handleCompile();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [code]);

  const handleCompile = async () => {
    setIsLoading(true);
    setTimeoutError(false);
    try {
      const response = await axios.post(
        "/api/compile",
        { code },
        { timeout: 10000 }
      );

      const { output, error } = response.data;
      if (output === "" && error === "") {
        setOutput("Program ran successfully but produced no output.");
      } else {
        setOutput(output);
      }
      setError(error);
    } catch (error) {
      setOutput("");

      if (error.code === "ECONNABORTED") {
        setTimeoutError(true);
        setError(
          "Compilation timed out. Please check your code for infinite loops or excessive resource usage."
        );
      } else {
        setError(error.response?.data?.error || "An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gray-900 font-sans">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col md:flex-row md:min-h-screen md:pt-16">
        {/* Added pt-16 for navbar padding */}
        {/* Sidebar (Visible on medium screens and above by default) */}
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="overflow-x-auto pt-20 pl-4 pr-4 flex-grow md:pt-12 md:pl-72 transition-all duration-300 bg-gray-900">
          <div className="text-justify">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
