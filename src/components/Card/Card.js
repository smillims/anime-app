/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import styles from './style.css';

export default function Card(card) {
  return (
    <a>
      <div class={styles.card} id={card.mal_id}>
        <div class={styles.cardImgContainer}>
          <img src={card.image_url} alt={card.title} />
        </div>
        <div class={styles.cardItemContainer}>
          <h3 class={styles.cardItemH3}>{card.title}</h3>
          <span class={styles.cardItemRating}>{card.score} / 10</span>
          <p class={styles.cardItemText}>{card.synopsis}</p>
          <button class={styles.cardButton} type="button">
            More
          </button>
        </div>
      </div>
    </a>
  );
}
