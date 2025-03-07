"use client";
import "@/styles/auth/page.css";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt, FaExclamation } from "react-icons/fa";

const FileInput = ({
  label,
  errTxt,
  onInput,
}: {
  label: string;
  errTxt?: string;
  onInput?: (files: File[]) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null); // File input reference

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      if (onInput) onInput(acceptedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] }, // Ensure PDF files are accepted
    multiple: false,
    noClick: true, // Prevents default click handling
  });

  const openFileExplorer = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="file-input-wrapper">
      <label className="file-label">{label}</label>

      {/* Dropzone Area */}
      <div {...getRootProps()}>
        <motion.div
          className={`dropzone ${isDragActive ? "drag-active" : ""}`}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", duration: 0.1 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={openFileExplorer} // Open file explorer when clicked
        >
          <input {...getInputProps()} ref={inputRef} />
          <FaCloudUploadAlt size={50} className="upload-icon" />
          <p>
            {isDragActive
              ? "Drop the PDF file here..."
              : "Drag & Drop or Click to Upload a PDF"}
          </p>
          {file ? (
            <p className="file-name">Selected: {file.name}</p>
          ) : (
            <p className="file-name">No file selected</p>
          )}
        </motion.div>
      </div>

      {/* Error Message */}
      <AnimatePresence mode="popLayout">
        {errTxt && (
          <motion.div
            className="auth-err-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaExclamation />
            <p>{errTxt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileInput;
