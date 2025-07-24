import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ src, alt, onClose }) {
    return (
        <div className={styles.modal_backdrop} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <img src={src} alt={alt} className={styles.modal_image} />
                <button className={styles.close_button} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
} 