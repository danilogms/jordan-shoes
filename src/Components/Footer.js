import React from 'react';
import styles from '../Components/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido por{' '}
        <a target="blank" href="https://www.linkedin.com/in/danilogms10/">
          Danilo Gomes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
