import { results } from './api-json';
import styles from '../css/style.css';

window.results = results;
window.renderApp = renderApp;
window.filterSearch = filterSearch;
window.cardsToShow = results;

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
              <form class="${
                styles.sortForm
              }" id="sortForm" name="sortForm" onsubmit="window.filterSearch(); window.renderApp()">
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
                autofocus
          />`;
}
function ApplyButtonSortForm() {
  return `<button class="${styles.formButton}" 
                  id="formButton" 
                  type="button" 
                  onclick="window.filterSearch(); window.renderApp()">
                    Button
            </button>`;
}
function CardsList() {
  return `<main class="${styles.main}">
            <div class="${styles.cardsItems}" id="cardsItems">
              ${cardsToShow
                .filter(anime => {
                  if (anime.rated === 'Rx') return false;
                  return true;
                })
                .map(card => Card(card))
                .join('')}
            </div>
          </main>`;
}

function filterSearch() {
  const form = document.forms.sortForm;
  const search = form.search.value;
  if (!search) return (window.cardsToShow = results);
  window.cardsToShow = results.filter(animeItem => {
    if (!(`${animeItem.title}`.toLowerCase().includes(search.toLowerCase()) && search)) return false;
    return true;
  });
}

function Card(card) {
  return `<div class="${styles.card}" id="${card.mal_id}">
            <img src="${card.image_url}" alt="${card.title} poster">
            <div class="${styles.cardItemContainer}">
              <h3 class="${styles.cardItemH3}">${card.title} <span class="${styles.cardItemRating}">[${card.rated}]</span></h3>
              <p class="${styles.cardItemText}">${card.synopsis}</p>
            </div>
          </div>`;
}
