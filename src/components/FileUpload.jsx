import React, { useRef, useState } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

export default function FileUpload({ onFileUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
        onFileUpload(file);
      }
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        setSelectedFile(file);
        onFileUpload(file);
      }
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const removeFile = () => {
      setSelectedFile(null);
      fileInputRef.current.value = null;
    };
  
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add File</h2>
  
        <div
          className="border-2 border-dashed border-gray-300 rounded-md py-10 px-4 text-center cursor-pointer hover:border-blue-500 transition"
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
          />
  
          <div className="flex flex-col items-center text-gray-600">
            <FaCloudUploadAlt className="text-3xl text-blue-500 mb-2" />
            <p className="font-semibold text-base">Upload your file here</p>
            <p className="text-sm mt-1">Files supported: PDF</p>
            <p className="text-xs text-gray-400 mt-1">Maximum size: 5MB</p>
          </div>
        </div>
  
        {selectedFile && (
          <div className="mt-4 bg-gray-100 px-4 py-3 rounded flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs uppercase">
                {selectedFile.name.split('.').pop()}
              </div>
              <div>
                <p className="text-sm font-medium">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / 1024).toFixed(0)}KB
                </p>
              </div>
            </div>
            <button
              className="text-red-600 hover:text-red-800 transition"
              onClick={removeFile}
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>
  );
}