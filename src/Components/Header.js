import React from 'react';
import styles from '../Components/Header.module.css';
import Titulo from './Titulo';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.promocao}>Ganhe R$ 10,00 de desconto no frete</div>
      <div className={styles.title}>
        <Titulo text="JordanShoes" />
      </div>
      <div className={styles.logo}>
        <Titulo className="title" text="A melhor loja de Jordan" />
        <p className={styles.paragrafo}>
          O tênis Jordan é fruto de uma velha e forte parceria
          <br />
          entre a Nike e o jogador Michael Jordan.
        </p>
      </div>
      <div className={styles.destaque}>
        <Titulo text="Destaques" />
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </p>
      </div>
    </header>
  );
};

export default Header;
