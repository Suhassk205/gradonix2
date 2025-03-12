"use client";

import styles from "@/styles/beta/dashboard/eval/EvalDash.module.css";
import { fetchBeta, handleBetaResponse } from "@/utils/server/beta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

interface Test {
  id: string;
  title: string;
  status: string;
  date: string;
}

const EvalDash: React.FC = () => {
  const router = useRouter();
  const [resData, setResData] = React.useState<{ resList: Test[] }>({
    resList: [],
  });
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  useLayoutEffect(() => {
    const initFetch = async () => {
      setIsLoading(true);
      try {
        const res = await fetchBeta("/v0/eval/list-all", {});
        console.log(res);

        if (res.error) {
          setError(res.error);
          return;
        }
        handleBetaResponse(res, router, setResData);
        console.log(resData);
      } catch (error) {
        setError("Failed to fetch tests");
      } finally {
        setIsLoading(false);
      }
    };
    initFetch();
  }, [router]);

  const handleDelete = async (testId: string) => {
    if (!testId) {
      console.error("No test ID provided");
      return;
    }

    if (window.confirm("Are you sure you want to delete this test?")) {
      try {
        const res = await fetchBeta("/eval/delete", {
          testId: testId,
        });

        if (res.success) {
          setResData((prev) => ({
            resList: prev.resList.filter((test) => test.id !== testId),
          }));
        } else {
          alert("Failed to delete test: " + (res.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Failed to delete test:", error);
        alert("An error occurred while deleting the test");
      }
    }
  };

  useLayoutEffect(() => {
    const initFetch = async () => {
      setIsLoading(true);
      try {
        const res = await fetchBeta("/eval/list-all", {});
        if (res.error) {
          setError(res.error);
          return;
        }
        handleBetaResponse(res, router, setResData);
      } catch (error) {
        setError("Failed to fetch tests");
      } finally {
        setIsLoading(false);
      }
    };
    initFetch();
  }, [router]);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            src="/assets/images/logo/gradonix.png"
            alt="GradeSense"
            width={150}
            height={40}
            className={styles.logo}
          />
          <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome back, Evaluator!</h1>
            <p className={styles.welcomeSubtitle}>
              Let's get started with your evaluations
            </p>
          </div>
        </div>

        <div className={styles.headerRight}>
          <button
            className={styles.newButton}
            onClick={() => router.push("/beta/dashboard/eval/new")}
          >
            Create New Test
          </button>
          <div className={styles.profile}>
            <span className={styles.profileInitial}>U</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {isLoading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>Loading tests...</p>
          </div>
        ) : resData.resList?.length > 0 ? (
          <>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Your Tests</h2>
              <input
                type="text"
                placeholder="Search tests..."
                className={styles.searchBar}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.testGrid}>
              {resData.resList.map(({title,  status}, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testHeader}>
                    <h3 className={styles.testTitle}>{title}</h3>
                    <span
                      className={`${styles.testStatus} ${
                        status === "Completed"
                          ? styles.completed
                          : styles.inProgress
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  {/* <p className={styles.testDate}>Created on: {test.date}</p> */}
                  <div className={styles.testActions}>
                    <button
                      className={styles.actionButton}
                      onClick={() =>
                        router.push(`/beta/dashboard/eval/${title}/view`)
                      }
                    >
                      View
                    </button>
                    {/* <button
                      className={styles.actionButton}
                      onClick={() =>
                        router.push(
                          `/beta/dashboard/eval/edit/${test.id || ""}`
                        )
                      }
                    >
                      Edit
                    </button> */}
                    { <button
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                      onClick={() => test.id && handleDelete(test.id)}
                    >
                      Delete
                    </button> }
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <svg
              className={styles.illustration}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              {/* Simple document with folded corner */}
              <rect
                x="60"
                y="40"
                width="80"
                height="100"
                rx="4"
                fill="#141B2D"
                stroke="#1E293B"
                strokeWidth="2"
              />
              <path d="M140 40 L140 60 L120 40 Z" fill="#1E293B" />

              {/* Simple lines representing text */}
              <rect x="75" y="70" width="50" height="6" rx="2" fill="#1E293B" />
              <rect x="75" y="90" width="50" height="6" rx="2" fill="#1E293B" />
              <rect
                x="75"
                y="110"
                width="30"
                height="6"
                rx="2"
                fill="#1E293B"
              />

              {/* Simple plus sign */}
              <circle cx="100" cy="150" r="15" fill="#5200FF" />
              <line
                x1="100"
                y1="142"
                x2="100"
                y2="158"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="92"
                y1="150"
                x2="108"
                y2="150"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <p className={styles.emptyMessage}>
              You haven't created any tests yet. Ready to get started?
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => router.push("/beta/dashboard/eval/new")}
            >
              Create Your First Test
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Link href="/about" className={styles.footerLink}>
            About Us
          </Link>
          <Link href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
          <button className={styles.feedbackButton}>Give Feedback</button>
        </div>
      </footer>
    </div>
  );
};

export default EvalDash;
