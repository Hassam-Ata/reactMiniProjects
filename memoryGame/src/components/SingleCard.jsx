import React from "react";
import styles from './SingleCard.module.css';

const SingleCard = ({ card, handleChoice, flipped,disabled }) => {
    const handleClick = () => {
      if(!disabled){
        handleChoice(card);
      }
      
    };

    return (
        <div className={styles.card}>
            <div className={flipped ? `${styles.flipped}` : ''}>
                <img className={styles.front} src={card.src} alt="card front" />
                <img
                    className={styles.back}
                    onClick={handleClick}
                    src="/images/cover.png"
                    alt="card back"
                />
            </div>
        </div>
    );
};

export default SingleCard;
