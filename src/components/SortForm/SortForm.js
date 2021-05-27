/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import styles from './style.css';

export default function SortForm({ onSubmit, value }) {
  return (
    <div class={styles.sectionForm}>
      <form
        class={styles.sortForm}
        id="sortForm"
        name="sortForm"
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.firstChild.value);
        }}
      >
        {SearchInputSortForm(value)}
        {ApplyButtonSortForm()}
      </form>
    </div>
  );
}

function SearchInputSortForm(value) {
  return (
    <input class={styles.search} id="search" type="text" name="search" value={value} autofocus />
  );
}

function ApplyButtonSortForm() {
  return (
    <button class={styles.formButton} id="formButton" type="submit" name="searchButton">
      Click me!
    </button>
  );
}
