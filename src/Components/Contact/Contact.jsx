import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container pb-5">
        <h2 className={`${styles.title} text-center text-uppercase mb-0 mt-0 fw-bold`}>Contact Section</h2>
        <div className="divider">
          <div className="line"></div>
          <div className="divider-icon"><i className="fas fa-star"></i></div>
          <div className="line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm">
              <div className="form-floating mb-3">
                <input
                  className={`${styles.input} form-control`}
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="userName"
                />
                <label htmlFor="userName">userName</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className={`${styles.input} form-control`}
                  id="userAge"
                  name="userAge"
                  type="number"
                  placeholder="userAge"
                />
                <label htmlFor="userAge">userAge</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className={`${styles.input} form-control`}
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  placeholder="userEmail"
                />
                <label htmlFor="userEmail">userEmail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className={`${styles.input} form-control`}
                  id="userPassword"
                  name="userPassword"
                  type="password"
                  placeholder="userPassword"
                />
                <label htmlFor="userPassword">userPassword</label>
              </div>
              <button className={`${styles.submit_btn} btn mb-5`} id="submitButton" type="submit">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


