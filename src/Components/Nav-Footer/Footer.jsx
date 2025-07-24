import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>

      <footer className={`${styles.footer} text-center`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-1">Location</h4>
              <p className="lead mb-0 fs-6 fw-medium">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-1">Around the Web</h4>
              <a className={`${styles.social_icon} mx-1`} href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
              <a className={`${styles.social_icon} mx-1`} href="#!"><i className="fab fa-fw fa-twitter"></i></a>
              <a className={`${styles.social_icon} mx-1`} href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
              <a className={`${styles.social_icon} mx-1`} href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-1">About Freelancer</h4>
              <p className=" mb-0 fs-6 fw-medium">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${styles.copyright} py-4 text-center text-white`}>
        <div className="container fs-6 fw-medium"><>Copyright © Your Website 2021</></div>
      </div>
    </div>
  );
}