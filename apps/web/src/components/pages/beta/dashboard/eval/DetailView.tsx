"use client";

import { motion } from "motion/react";
import { fetchBeta } from "@/utils/server/beta";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import "@/styles/beta/dashboard/eval/detail-view.css";

interface EvalDetails {
  status: "Queued" | "Evaluated";
  question: { location: string; publicURL: string; size: number | null };
  answer: { location: string; publicURL: string; size: number | null };
  model: { location: string; publicURL: string; size: number | null };
  action: "Result" | "Evaluate";
}

interface ResData {
  details: EvalDetails;
}

type FileType = "question" | "answer" | "model";

const DetailView = ({ title }: { title: string }) => {
  const [resData, setResData] = useState<ResData | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    const initFetch = async () => {
      try {
        const response = await fetchBeta(`/v0/eval/view`, { title });
        if ("resData" in response) {
          setResData(response.resData);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    initFetch();
  }, [title]);

  const handleViewPDF = (url: string) => {
    window.open(url, "_blank");
  };

  const handleAction = async () => {
    if (resData?.details?.action === "Result") {
      router.push(`/beta/dashboard/eval/${title}/result`);
    } else if (resData?.details.action == "Evaluate") {
      setIsEvaluating(true);
      const res = await fetchBeta("/v0/eval/evaluate", { title: title });
      if ("resData" in res) {
        setResData(res.resData);
      }
      setIsEvaluating(false);
    }
  };

  return (
    <div className="analysis-container">
      <div className="analysis-content">
        <div className="text-center mb-8">
          <h1 className="analysis-title">{title}</h1>
        </div>
        <div className="grid gap-6">
          {["question", "answer", "model"].map((key) => {
            const fileType = key as FileType;
            return (
              <motion.div
                key={fileType}
                className="card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h2 className="card-title">
                  {fileType.charAt(0).toUpperCase() + fileType.slice(1)} Paper
                </h2>
                <div className="card-content">
                  <div className="file-size">
                    Size:{" "}
                    {resData?.details[fileType]?.size
                      ? `${(resData.details[fileType].size / 1024).toFixed(2)} KB`
                      : "Unknown Size"}
                  </div>
                  <button
                    className="pdf-button"
                    onClick={() =>
                      handleViewPDF(resData?.details[fileType]?.publicURL || "")
                    }
                  >
                    View PDF
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={handleAction}
            disabled={isEvaluating}
            className="action-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isEvaluating
              ? "Evaluating..."
              : resData?.details?.action === "Result"
                ? "View Results"
                : "Evaluate"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
