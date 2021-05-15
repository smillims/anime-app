import styles from '../css/style.css';
import { allowedTitles } from '../data/animeSearchAPI';
import { isCurrentTitleDataLoaded } from '../data/animeData';
import CardsList from './CardsList';

export default function AnimeCardsResults() {
  const { currentTitle, isDataLoading, error } = window.dataStore;

  let content = ``;
  if (currentTitle === '') {
    content = `<p class="${styles.paragraphOfState}">Good day (or evening)!
    <br></br>
    At the moment you could search just some of titles: ${allowedTitles.join(', ')}.</p>`;
  } else {
    if (isDataLoading) {
      content = 'Loading...';
    }

    if (error !== null) {
      content = error;
    }

    if (isCurrentTitleDataLoaded()) {
      content = `${CardsList(isCurrentTitleDataLoaded())}`;
    }
  }

  return `<p class='${styles.paragraphOfState}'>${content}</p>`;
}
