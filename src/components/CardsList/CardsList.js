/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import styles from './style.css';
import Card from '../Card';

export default function CardsList(animeSearch) {
  if (Object.keys(animeSearch).length == 0) return;

  return (
    <main class={styles.main}>
      <div class={styles.cardsItems} id="cardsItems">
        {animeSearch.map(card => Card(card))}
      </div>
    </main>
  );
}
