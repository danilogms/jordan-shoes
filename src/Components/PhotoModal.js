import React from 'react';
import styles from '../Components/PhotoModal.module.css';

const PhotoModal = ({ photo, setModalPhoto, src, alt }) => {
  return (
    <div className={styles.modal}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default PhotoModal;
