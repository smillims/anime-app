import { results } from './api-json';
import styles from '../css/style.css';

window.results = results;
window.renderApp = renderApp;
window.filterSearch = filterSearch;
window.renderCards = renderCards;

window.dataStore = {
  currentTitle: '',
};

function renderApp() {
  document.querySelector('#app').innerHTML = App();
}

renderApp();

function App() {
  return `${Header()}
          ${SortForm()}
          ${CardsList()}`;
}
function Header() {
  return `<header class="${styles.header}">
            <h1 class="${styles.headerH1}" title="* read like Tsundoku">積ん読 *</h1>
          </header>`;
}
function SortForm() {
  return ` <div class="${styles.sectionForm}">
              <form class="${styles.sortForm}" id="sortForm" name="sortForm" onsubmit="return false">
                <div class="${styles.blockSearch}">
                  ${SearchInputSortForm()}
                  ${ApplyButtonSortForm()}
                </div>
              </form>
            </div>`;
}
function SearchInputSortForm() {
  return `<input 
                class="${styles.search}"
                id="search" 
                type="text"
                name="search"
                value="${window.dataStore.currentTitle}"
                onchange="window.dataStore.currentTitle = this.value;"
          />`;
}
function ApplyButtonSortForm() {
  return `<button class="${styles.formButton}" 
                  id="formButton" 
                  type="button" 
                  onclick="window.renderCards(window.filterSearch(window.results)); window.renderApp()">
                    Button
            </button>`;
}
function CardsList() {
  return `<main class="${styles.main}">
            <div class="${styles.cardsItems}" id="cardsItems">
              ${renderCards(results)}
            </div>
          </main>`;
}

function filterSearch(anime) {
  const form = document.forms.sortForm;
  const search = form.search.value;
  console.log(search);
  return anime.filter(animeItem => {
    if (!(`${animeItem.title}`.toLowerCase().includes(search.toLowerCase()) && search)) {
      console.log('no');
      return false;
    } else {
      console.log('yes');
      return true;
    }
  });
}

function renderCards(collectionAnime) {
  return collectionAnime.map(animeList => generateCard(animeList)).join('');
}

function generateCard(list) {
  return `<div class="${styles.card}" id="${list.mal_id}">
            <img src="${list.image_url}" alt="${list.title} poster">
            <div class="${styles.cardItemContainer}">
              <h3 class="${styles.cardItemH3}">${list.title} <span class="${styles.cardItemRating}">[${list.rated}]</span></h3>
              <p class="${styles.cardItemText}">${list.synopsis}</p>
            </div>
          </div>`;
}
