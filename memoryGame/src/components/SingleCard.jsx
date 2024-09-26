import React from "react";
import styles from './SingleCard.module.css'
const SingleCard = ({ card,handleChoice }) => {
    const handleClick=()=>{
         handleChoice(card)   
    }
  return (
    <div>
      <div className={styles.card} >
        <img className="front" src={card.src} alt="card front" />
        <img className="back" 
        onClick={handleClick}
        src="/images/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
