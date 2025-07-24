import React from 'react';
import homeImage from '../../assets/images/avataaars.svg';

export default function Home() {
  return (
    <>
      <header className={`  text-white text-center pt-5`} style={{ backgroundColor: "#1abc9c", minHeight: "85vh" }}>
        <div className="container pt-5 d-flex align-items-center flex-column">
          <img className={`mb-5 pt-5`} style={{ width: "20%" }} src={homeImage} alt="..." />
          <h1 className={`display-5 text-uppercase mb-0 fw-bold`}>Start Framework</h1>
          <div className="divider divider-light">
            <div className="line rounded-2"></div>
            <div className="divider-icon"><i className="fas fa-star"></i></div>
            <div className="line rounded-2"></div>
          </div>
          <p className={`fs-5 font-weight-light mb-0 pb-5`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    </>
  );
}