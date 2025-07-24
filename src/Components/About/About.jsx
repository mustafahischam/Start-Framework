import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.about} text-white mb-0 `} id="about">
      <div className="container pt-5 pb-5 mt-5 mb-5">
        <h2 className={`${styles.title} text-center text-uppercase text-white fs-1 fw-bold`}>About component</h2>
        <div className="divider divider-light">
          <div className="line"></div>
          <div className="divider-icon"><i className="fas fa-star"></i></div>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
          <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>
      </div>
    </section>
  );
}