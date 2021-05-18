/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import styles from './css/style.css';
import { performSearch } from '../../data/animeData';

export default function SortForm() {
  return (
    <div class={styles.sectionForm}>
      <form
        class={styles.sortForm}
        id="sortForm"
        name="sortForm"
        onsumbit={e => e.explicitOriginalTarget.nextElementSibling}
      >
        {SearchInputSortForm()}
        {ApplyButtonSortForm()}
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
      autofocus
    />
  );
}

function ApplyButtonSortForm() {
  return (
    <button
      class={styles.formButton}
      id="formButton"
      type="submit"
      name="searchButton"
      onclick={e => performSearch(e.target.form.firstChild.value)}
    >
      Click me!
    </button>
  );
}
