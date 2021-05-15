import styles from '../css/style.css';

export default function SearchInputSortForm() {
  return `<input 
                class="${styles.search}"
                id="search" 
                type="text"
                name="search"
                value="${window.dataStore.currentTitle}"
                onchange="window.performSearch(this.value)"
                autofocus
          />`;
}
