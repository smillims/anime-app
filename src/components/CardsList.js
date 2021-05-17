/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import styles from '../css/style.css';
import Card from './Card';

export default function CardsList(animeSearch) {
  //const form = document.forms.sortForm;
  //const search = form.search.value;
  return (
    <main class={styles.main}>
      <div class={styles.cardsItems} id="cardsItems">
        {animeSearch
          .filter(anime => {
            if (anime.rated === 'Rx') return false;
            else if (!anime.title.toLowerCase().includes(window.dataStore.currentTitle.toLowerCase())) return false;
            return true;
          })
          .map(card => Card(card))}
      </div>
    </main>
  );
}
