import React from 'react';
import styles from './style.css';

export default function Card(card) {
  return (
    <a key={card.mal_id}>
      <div className={styles.card} id={card.mal_id}>
        <div className={styles.cardImgContainer}>
          <img src={card.image_url} alt={card.title} />
        </div>
        <div className={styles.cardItemContainer}>
          <h3 className={styles.cardItemH3}>{card.title}</h3>
          <span className={styles.cardItemRating}>{card.score} / 10</span>
          <p className={styles.cardItemText}>{card.synopsis}</p>
          <button className={styles.cardButton} type="button">
            More
          </button>
        </div>
      </div>
    </a>
  );
}
