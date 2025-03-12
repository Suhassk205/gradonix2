"use client";

import styles from "@/styles/beta/dashboard/eval/EvalDash.module.css";
import { fetchBeta, handleBetaResponse } from "@/utils/server/beta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

interface Test {
  title: string;
  status: string;
}

const EvalDash: React.FC = () => {
  const router = useRouter();
  const [resData, setResData] = useState<{ resList: Test[] }>({
    resList: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

  const loadTests = async () => {
    setIsLoading(true);
    try {
      const res = await fetchBeta("/v0/eval/list-all", {});
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

  useLayoutEffect(() => {
    loadTests();
  }, [router]);

  const handleDelete = async (testTitle: string) => {
    if (!testTitle) {
      console.error("No test title provided");
      return;
    }

    try {
      const res = await fetchBeta("/v0/eval/delete", {
        testId: testTitle,
      });

      if (res.success) {
        // Reload the test list after successful deletion
        loadTests();
        setDeleteConfirmation(null);
      } else {
        alert("Failed to delete test: " + (res.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Failed to delete test:", error);
      alert("An error occurred while deleting the test");
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const filteredTests = resData.resList?.filter(test => 
    test.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Confirm Deletion</h3>
            <p className={styles.modalText}>
              Are you sure you want to delete "{deleteConfirmation}"? This action cannot be undone.
            </p>
            <div className={styles.modalActions}>
              <button 
                className={styles.cancelButton}
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button 
                className={styles.confirmButton}
                onClick={() => handleDelete(deleteConfirmation)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

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
        ) : filteredTests?.length > 0 ? (
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
              {filteredTests.map(({title, status}, index) => (
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
                  <div className={styles.testActions}>
                    <button
                      className={styles.actionButton}
                      onClick={() =>
                        router.push(`/beta/dashboard/eval/${title}/view`)
                      }
                    >
                      View
                    </button>
                    <button
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                      onClick={() => setDeleteConfirmation(title)}
                    >
                      Delete
                    </button>
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
              {/* Simple document with folded corner - Updated colors */}
              <rect
                x="60"
                y="40"
                width="80"
                height="100"
                rx="4"
                fill="#f4f4f5"
                stroke="#e4e4e7"
                strokeWidth="2"
              />
              <path d="M140 40 L140 60 L120 40 Z" fill="#e4e4e7" />

              {/* Simple lines representing text */}
              <rect x="75" y="70" width="50" height="6" rx="2" fill="#d4d4d8" />
              <rect x="75" y="90" width="50" height="6" rx="2" fill="#d4d4d8" />
              <rect
                x="75"
                y="110"
                width="30"
                height="6"
                rx="2"
                fill="#d4d4d8"
              />

              {/* Simple plus sign */}
              <circle cx="100" cy="150" r="15" fill="#7c3aed" />
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