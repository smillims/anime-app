/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import styles from './css/style.css';
import Card from '../Card';

export default function CardsList(animeSearch) {
  return (
    <main class={styles.main}>
      <div class={styles.cardsItems} id="cardsItems">
        {animeSearch.map(card => Card(card))}
      </div>
    </main>
  );
}
