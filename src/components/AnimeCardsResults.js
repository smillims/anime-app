/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
import styles from '../css/style.css';
import { isCurrentTitleDataLoaded } from '../data/animeData';
import CardsList from './CardsList';

export default function AnimeCardsResults() {
  const { currentTitle, isDataLoading, error } = window.dataStore;

  let content = ``;
  if (currentTitle === '') {
    content = (
      <div>
        <p>Good day (or evening)!</p>
        <p>You could search anime whatever you like!</p>
      </div>
    );
  } else {
    if (isDataLoading) {
      content = 'Loading...';
    }

    if (error !== null) {
      content = error;
    }

    if (isCurrentTitleDataLoaded()) {
      content = CardsList(isCurrentTitleDataLoaded());
    }
  }

  return <p class={styles.paragraphOfState}>{content}</p>;
}
