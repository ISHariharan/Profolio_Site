import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'My Projects',
    imgSrc: require('/img/Projects.png').default,
    description: (
      <>
        Explore a curated selection of my most impactful and innovative projects. From dynamic web applications to engaging interactive experiences, see how my skills and creativity come to life.
      </>
    ),
  },
  {
    title: 'Professional Experience',
    imgSrc: require('/img/Experience.png').default,
    description: (
      <>
        Dive into my professional journey, where you'll find details about my roles, achievements, and the diverse experiences that have shaped my career. Discover how my background and expertise drive my passion for excellence.
      </>
    ),
  },
  {
    title: 'Connect With Me',
    imgSrc: require('/img/Contact.png').default,
    description: (
      <>
        Let’s start a conversation! Whether you’re interested in collaborating on a project, seeking advice, or just want to connect, reach out to me through the links below. I look forward to exploring new opportunities together.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} alt={title} style={{height : "250px", width : "250px"}} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
