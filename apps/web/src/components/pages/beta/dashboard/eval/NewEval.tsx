"use client";

import ButtonLoading from "@/components/pages/beta/dashboard/loading/Loaderbtn";
import "@/styles/beta/dashboard/NewEval.css";
import "@/styles/beta/dashboard/NewEvalbutton.css";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";
import FileInput from "../../FileInput";

interface UploadButtonProps {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const NewEval = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    "Exam Paper": null,
    "Model Paper": null,
    "Answer Paper": null,
  });
  const [errorText, setErrorText] = useState<{
    title?: string;
    question?: string;
    model?: string;
    answer?: string;
  }>({
    title: "",
    question: "",
    model: "",
    answer: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFileChange = (label: string, file: File | null) => {
    if (file && file.type !== "application/pdf") {
      setErrorText((prev) => ({
        ...prev,
        [label === "Exam Paper"
          ? "fileQ"
          : label === "Model Paper"
            ? "fileM"
            : "fileA"]: `${label} must be a PDF file`,
      }));
      return;
    }
    setFiles((prevFiles) => ({ ...prevFiles, [label]: file }));
    setErrorText((prev) => ({
      ...prev,
      [label === "Exam Paper"
        ? "fileQ"
        : label === "Model Paper"
          ? "fileM"
          : "fileA"]: "",
    }));
  };

  const validateInputs = () => {
    let errors: any = {};
    if (!title) errors.title = "Title is required";
    if (!files["Exam Paper"]) errors.fileQ = "Question Paper is required";
    if (!files["Model Paper"]) errors.fileM = "Model Paper is required";
    if (!files["Answer Paper"]) errors.fileA = "Answer Paper is required";

    setErrorText(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    // if (!validateInputs()) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("Q", files["Exam Paper"]!);
    formData.append("M", files["Model Paper"]!);
    formData.append("A", files["Answer Paper"]!);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v0/eval/new`,
      {
        method: "POST",
        body: formData,
      }
    );

    const resJson = await res.json();
    console.log(resJson);

    if ("resRoute" in resJson) {
      return router.replace(resJson.resRoute as string);
    }
    if (resJson.resData.error) {
      setErrorText({ ...resJson.resData.error });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="new-eval-container">
        {loading && (
          <div className="loading-overlay">
            <ButtonLoading />
          </div>
        )}
        <div className="title-input">
          <h1 className="title-label">Title for the Test</h1>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errorText.title && (
            <div className="error-message">{errorText.title as string}</div>
          )}
        </div>

        <div className="file-layout">
          {/*           {["Exam Paper", "Model Paper", "Answer Paper"].map((label, index) => (
            <div key={index} className="file-input">
              <FileInput
                label={label}
                errTxt={
                  label === "Exam Paper"
                    ? (errorText.question as string)
                    : label === "Model Paper"
                      ? (errorText.model as string)
                      : (errorText.answer as string)
                }
                onInput={(files: File[]) => handleFileChange(label, files[0])}
              />
              {errorText[
                label === "Exam Paper"
                  ? "fileQ"
                  : label === "Model Paper"
                    ? "fileM"
                    : "fileA"
              ] && (
                <div className="error-message">
                  {
                    errorText[
                      label === "Exam Paper"
                        ? "fileQ"
                        : label === "Model Paper"
                          ? "fileM"
                          : "fileA"
                    ]
                  }
                </div>
              )}
            </div>
          ))} */}
          <div className="file-input">
            <FileInput
              label="Question Paper"
              onInput={(files: File[]) =>
                handleFileChange("Exam Paper", files[0])
              }
            />
            {errorText.question && (
              <div className="error-message">{errorText.question}</div>
            )}
          </div>
          <div className="file-input">
            <FileInput
              label="Model Paper"
              errTxt={errorText.model as string}
              onInput={(files: File[]) =>
                handleFileChange("Model Paper", files[0])
              }
            />
            {errorText.model && (
              <div className="error-message">{errorText.model}</div>
            )}
          </div>
          <div className="file-input">
            <FileInput
              label="Answer Paper"
              errTxt={errorText.answer as string}
              onInput={(files: File[]) =>
                handleFileChange("Answer Paper", files[0])
              }
            />
            {errorText.answer && (
              <div className="error-message">{errorText.answer}</div>
            )}
          </div>
        </div>

        <UploadButton disabled={loading} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default NewEval;

const UploadButton = ({ disabled, onClick }: UploadButtonProps) => {
  return (
    <div className="buttonlayout">
      <button
        className={`continue-application ${disabled ? "disabled-btn" : ""}`}
        onClick={onClick}
        disabled={disabled}
        type="submit"
      >
        <div>
          <div className="pencil" />
          <div className="folder">
            <div className="top">
              <svg viewBox="0 0 24 27">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
              </svg>
            </div>
            <div className="paper" />
          </div>
        </div>
        Upload Test Files
      </button>
    </div>
  );
};
