/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
import styles from '../css/style.css';
import { performSearch } from '../data/animeData';

export default function SortForm() {
  return (
    <div class={styles.sectionForm}>
      <form class={styles.sortForm} id="sortForm" name="sortForm">
        <div class={styles.blockSearch}>
          {SearchInputSortForm()}
          {ApplyButtonSortForm()}
        </div>
      </form>
    </div>
  );
}

function SearchInputSortForm() {
  return (
    <input
      class={styles.search}
      id="search"
      type="text"
      name="search"
      value={window.dataStore.currentTitle}
      onchange={e => performSearch(e.target.value)}
      autofocus
    />
  );
}

function ApplyButtonSortForm() {
  return (
    <button class={styles.formButton} id="formButton" type="button" name="searchButton">
      Click me!
    </button>
  );
}
