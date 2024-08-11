import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../pages/index.module.css';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import ProfileImage from "../../static/img/portfolio-3.png"

function HomePageHeaderv2() {
  useEffect(() => {
    const text = document.querySelector(`.${styles.secText}`);
    const textLoad = () => {
      setTimeout(() => {
        text.textContent = 'Student';
      }, 0);
      setTimeout(() => {
        text.textContent = 'Developer';
      }, 4000);
      setTimeout(() => {
        text.textContent = 'Designer';
      }, 8000);
    };
    textLoad();
    const interval = setInterval(textLoad, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.MyName}>Hariharan I S</h1>
            <h3 className={styles.IamContainer}>
              <div><span className={clsx(styles.text, styles.firstText)}>I'm a </span></div>
              <div><span className={clsx(styles.text, styles.secText)}>Freelancer</span></div>
            </h3>
          </div>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <img src={ProfileImage} alt="Profile" className={styles.profileImage} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={``}>
      <HomePageHeaderv2 />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}