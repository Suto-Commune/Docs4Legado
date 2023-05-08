import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '便于使用',
    description: (
      <>
        <code>$ java -jar reader-pro.jar</code>就好啦，是不是很简单？
      </>
    ),
  },
  {
    title: '不局限于安卓',
    description: (
      <>
        安卓，IOS，Kindle，只要您有浏览器，我们就可以随时看书！
      </>
    ),
  },
  {
    title: '多框架',
    description: (
      <>
        Kotlin + Spring Boot + Vert.x + Coroutine 。 前端 Vue.js + Element
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
