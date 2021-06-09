import React from 'react';
import styles from './style.css';
import Card from '../Card';

export default function CardsList(animeSearch, id, setId) {
  if (Object.keys(animeSearch).length == 0) return;

  return (
    <main className={styles.main}>
      <div className={styles.cardsItems} id="cardsItems">
        {animeSearch.map(card => Card(card, id, setId))}
      </div>
    </main>
  );
}
