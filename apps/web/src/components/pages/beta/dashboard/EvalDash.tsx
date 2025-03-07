"use client";
import { fetchBeta, handleBetaResponse } from "@/utils/server/beta";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";
import styles from '@/styles/beta/dashboard/eval/EvalDash.module.css'; // Ensure this file exists

interface Test {
  title: string;
  status: string;
  date: string;
}

const EvalDash: React.FC = () => {
  const router = useRouter();
  const [resData, setResData] = React.useState<{ resList: Test[] }>({ resList: [] });

  useLayoutEffect(() => {
    const initFetch = async () => {
      const res = await fetchBeta("/v0/eval/list-all", {});
      handleBetaResponse(res, router, setResData);
    };
    initFetch();
  }, [router]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/assets/images/logo/gradonix.png" alt="GradeSense" className={styles.logo} />
          <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome back, Evaluator!</h1>
            <p className={styles.welcomeSubtitle}>Let's get started with your evaluations</p>
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
        {resData.resList?.length > 0 ? (
          <>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Your Tests</h2>
              <input
                type="text"
                placeholder="Search tests..."
                className={styles.searchBar}
              />
            </div>
            
            <div className={styles.testGrid}>
              {resData.resList.map((test: any) => (
                <div key={test.title} className={styles.testCard}>
                  <div className={styles.testHeader}>
                    <h3 className={styles.testTitle}>{test.title}</h3>
                    <span className={`${styles.testStatus} ${test.status === 'Completed' ? styles.completed : styles.inProgress}`}>
                      {test.status}
                    </span>
                  </div>
                  <p className={styles.testDate}>Created on: {test.date}</p>
                  <div className={styles.testActions}>
                    <button className={styles.actionButton}>View</button>
                    <button className={styles.actionButton}>Edit</button>
                    <button className={styles.actionButton}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <svg className={styles.illustration} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              {/* Simple document with folded corner */}
              <rect x="60" y="40" width="80" height="100" rx="4" fill="#141B2D" stroke="#1E293B" strokeWidth="2"/>
              <path d="M140 40 L140 60 L120 40 Z" fill="#1E293B"/>
              
              {/* Simple lines representing text */}
              <rect x="75" y="70" width="50" height="6" rx="2" fill="#1E293B"/>
              <rect x="75" y="90" width="50" height="6" rx="2" fill="#1E293B"/>
              <rect x="75" y="110" width="30" height="6" rx="2" fill="#1E293B"/>
              
              {/* Simple plus sign */}
              <circle cx="100" cy="150" r="15" fill="#5200FF"/>
              <line x1="100" y1="142" x2="100" y2="158" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <line x1="92" y1="150" x2="108" y2="150" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <p className={styles.emptyMessage}>You haven't created any tests yet. Ready to get started?</p>
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
          <a href="/about" className={styles.footerLink}>About Us</a>
          <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
          <a href="/terms" className={styles.footerLink}>Terms of Service</a>
          <button className={styles.feedbackButton}>Give Feedback</button>
        </div>
      </footer>
    </div>
  );
};

export default EvalDash;

