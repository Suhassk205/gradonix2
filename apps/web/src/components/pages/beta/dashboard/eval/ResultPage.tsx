"use client";
import "@/styles/beta/dashboard/ResultPage.css";
import { fetchBeta, handleBetaResponse } from "@/utils/server/beta";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ResultPage = ({ title }: { title: string }) => {
  const router = useRouter();
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    const initFetch = async () => {
      const res = await fetchBeta("/v0/eval/result", { title });
      console.log("API Response:", res);
      handleBetaResponse(res, router, setResData);
    };
    initFetch();
  }, [router, title]);

  if (!resData) {
    return (
      <div className="loading-state">
        <div className="loading-spinner" />
      </div>
    );
  }

  const getScoreClass = (score: number) => {
    if (score >= 80) return "tag--success";
    if (score >= 60) return "tag--warning";
    return "tag--danger";
  };

  const getConfidenceBadge = (level: string) => {
    const levels: { [key: string]: string } = {
      high: "tag--success",
      medium: "tag--warning",
      low: "tag--danger",
    };
    return `tag ${levels[level.toLowerCase()] || "tag--warning"}`;
  };

  return (
    <div className="result-container">
      <div className="result-layout">
      <div className="result-title">
        <h1 className="result-title__main">{title}</h1>
        <h2 className="result-title__sub">Evaluation Results</h2>
      </div>

      <div className="summary-card">
        <div className="summary-card__header">
          <h2 className="summary-card__title">Performance Summary</h2>
        </div>
        <div className="summary-stats">
          <div className="summary-stat">
            <div className="summary-stat__value">
              {resData.result.evaluationSummary?.totalMarks} /{" "}
              {resData.result.evaluationSummary?.totalPossibleMarks}
            </div>
            <div className="summary-stat__label">Total Score</div>
          </div>
          <div className="summary-stat">
            <div className="summary-stat__value">
              {resData.result.evaluationSummary?.percentage}%
            </div>
            <div className="summary-stat__label">Percentage</div>
          </div>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card__header">
          <h3 className="summary-card__title">Performance Analysis</h3>
        </div>
        <div className="summary-stats">
          <div className="summary-stat">
            <h4 className="summary-stat__subtitle">Key Strengths</h4>
            <ul className="strength-list">
              {resData.result.strengthsAndWeaknesses?.strengths.map(
                (strength: string, index: number) => (
                  <li key={index} className="strength-list__item">
                    <span className="strength-list__icon">✓</span>
                    {strength}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="summary-stat">
            <h4 className="summary-stat__subtitle">Areas for Improvement</h4>
            <ul className="improvement-list">
              {resData.result.strengthsAndWeaknesses?.weaknesses.map(
                (weakness: string, index: number) => (
                  <li key={index} className="improvement-list__item">
                    <span className="improvement-list__icon">!</span>
                    {weakness}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="question-section">
        <h3 className="section-title">Detailed Question Analysis</h3>
        {resData.result.questionWiseBreakdown?.map(
          (question: any, index: number) => (
            <div key={index} className="question-card">
              <div className="question-card__header">
                <div className="question-card__title-group">
                  <h4 className="question-card__title">
                    Question {question.questionNumber}
                  </h4>
                  <p className="question-card__text">{question.questionText}</p>
                </div>
                <div className="question-card__score-group">
                  <span
                    className={`question-card__score ${getScoreClass((question.marksAwarded / question.maximumMarks) * 100)}`}
                  >
                    {question.marksAwarded} / {question.maximumMarks}
                  </span>
                  <span
                    className={getConfidenceBadge(question.confidenceLevel)}
                  >
                    {question.confidenceLevel} Confidence
                  </span>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-bar__fill"
                  style={{
                    width: `${(question.marksAwarded / question.maximumMarks) * 100}%`,
                  }}
                />
              </div>

              <div className="question-card__content">
                <div className="question-card__section">
                  <h5 className="question-card__subtitle">
                    Evaluation Justification
                  </h5>
                  <p className="question-card__text">
                    {question.justification}
                  </p>
                </div>

                <div className="question-card__section">
                  <h5 className="question-card__subtitle">
                    Key Concepts Identified
                  </h5>
                  <div className="question-card__tags">
                    {question.keywords.map((keyword: string, idx: number) => (
                      <span key={idx} className="tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {question.illegibleContent > 0 && (
                  <div className="question-card__section question-card__section--warning">
                    <h5 className="question-card__subtitle">
                      Illegible Sections Detected
                    </h5>
                    <ul className="illegible-list">
                      {question.illegibleSections?.map(
                        (section: string, idx: number) => (
                          <li key={idx} className="illegible-list__item">
                            {section}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>

      <div className="evaluator-notes">
        <div className="evaluator-notes__header">
          <h3 className="evaluator-notes__title">Evaluator's Feedback</h3>
        </div>
        <div className="evaluator-notes__content">
          <p>{resData.result.evaluatorNotes}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ResultPage;
