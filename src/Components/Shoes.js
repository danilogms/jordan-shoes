import React from 'react';
import Shoes1 from '../Assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg';
import Shoes2 from '../Assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg';
import Shoes3 from '../Assets/air-jordan-1-mid-bright-citrus-1-1000 1.svg';
import Shoes4 from '../Assets/air-jordan-1-mid-carbon-fiber-1-1000 1.svg';
import Shoes5 from '../Assets/air-jordan-1-mid-grey-camo-1-1000 1.svg';
import Shoes6 from '../Assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg';
import Shoes7 from '../Assets/air-jordan-1-retro-high-court-purple-w-1-400.svg';
import Shoes8 from '../Assets/air-jordan-1-mid-dutch-green-1-400.svg';
import styles from '../Components/Shoes.module.css';

const Shoes = () => {
  const shoesArray = [
    Shoes1,
    Shoes2,
    Shoes3,
    Shoes4,
    Shoes5,
    Shoes6,
    Shoes7,
    Shoes8,
  ];

  return (
    <div className={styles.container}>
      {shoesArray.map((shoe) => (
        <div key={shoe} className={styles.containerShoes}>
          <img src={shoe} alt={shoe} />
        </div>
      ))}
    </div>
  );
};

export default Shoes;
