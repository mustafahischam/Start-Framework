import React, { useState } from 'react';
import port1 from '../../assets/images/port1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';
import styles from './Portfolio.module.css';
import Modal from '../Modal/Modal';

export default function Portfolio() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <section className={`${styles.portfolio} portfolio`} id="portfolio">
            <div className="container">
                <h2 className={`${styles.title} text-center text-uppercase text-secondary mb-0`}>Portfolio</h2>
                <div className="divider">
                    <div className="line"></div>
                    <div className="divider-icon"><i className="fas fa-star"></i></div>
                    <div className="line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port1)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port1} alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port2)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port2} alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port3)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port3} alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port1)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port1} alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port2)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port2} alt="..." />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${styles.card} mx-auto`} onClick={() => openModal(port3)}>
                            <div className={styles.caption}>
                                <div className={styles.caption_text}><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={port3} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            {modalImage && <Modal src={modalImage} alt="Portfolio Item" onClose={closeModal} />}
        </section>
    );
}