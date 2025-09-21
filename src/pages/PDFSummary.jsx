import React, { useState } from "react";

import FileUpload from "../components/FileUpload";
import PdfSummary from "../components/SummaryDisplay";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPDFSummary } from "../api/api";

export default function App() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Add loading state

  const handleFileUpload = async (file) => {
    try {
      setLoading(true); // ✅ Start loading
      const summaryData = await getPDFSummary(file);
      setSummary(summaryData);
    } catch (err) {
      console.error("Upload failed", err);
      alert("⚠️ Upload failed");
    } finally {
      setLoading(false); // ✅ Always stop loading
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-50 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center mt-25">
          PDF Summarizer
        </h1>

        <div className="max-w-2xl mx-auto">

          {/* 🔁 Handle 3 states: loading, summary, or upload */}
          {loading ? (
            <div className="text-center py-20 text-gray-600 text-lg font-medium">
              <div className="flex flex-col items-center justify-center text-center py-20 text-gray-600 text-lg font-medium">
                <svg
                    className="animate-spin h-8 w-8 text-blue-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    />
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
                <p>Generating summary, please wait...</p>
                </div>
            </div>
          ) : summary ? (
            <PdfSummary summary={summary} />
          ) : (
            <FileUpload onFileUpload={handleFileUpload} />
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

