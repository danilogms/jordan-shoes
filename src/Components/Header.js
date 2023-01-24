import React from 'react';
import styles from '../Components/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.promocao}>Ganhe R$ 10,00 de desconto no frete</div>
      <div className={styles.title}>
        <h2>JordanShoes</h2>
      </div>
      <div className={styles.logo}>
        <h1 className="title">A melhor loja de Jordan</h1>
        <p className={styles.paragrafo}>
          O tênis Jordan é fruto de uma velha e forte parceria
          <br />
          entre a Nike e o jogador Michael Jordan.
        </p>
      </div>
      <div className={styles.destaque}>
        <h1>Destaques</h1>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </p>
      </div>
    </div>
  );
};

export default Header;
