import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function SummaryDisplay({summary}) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Summary</h1>
  
        <section className="prose prose-lg mb-6">
          <ReactMarkdown>{summary.summary}</ReactMarkdown>
        </section>
  
        <section className="border-t pt-4 text-sm text-gray-600">
          <p><span className="font-semibold">Filename:</span> {summary.meta.filename}</p>
          <p><span className="font-semibold">Size:</span> {summary.meta.size_kb.toFixed(2)} KB</p>
        </section>
      </div>
    );
  }
