import { check } from 'prettier';
import styles from '../css/style.css';

window.renderApp = renderApp;
window.performSearch = performSearch;
window.validateAndLoadData = validateAndLoadData;

window.dataStore = {
  currentTitle: '',
  isDataLoading: false,
  error: null,
  cashOfAnimeSearch: {},
};

const animeTitles = ['One Piece', 'Tokyo Ghoul', 'Naruto'];
const allowedTitles = Object.values(animeTitles);

function getAnimeSearchUrl(search) {
  const checkTitle = allowedTitles.filter(animeTitle => animeTitle === search);
  const stringToUrl = checkTitle.join().replace(/\s+/g, '');
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}

function isCurrentTitleDataLoaded() {
  const { cashOfAnimeSearch, currentTitle } = window.dataStore;
  return cashOfAnimeSearch[currentTitle];
}

function validateAndLoadData() {
  const { currentTitle } = window.dataStore;

  if (!allowedTitles.includes(currentTitle)) {
    const error = `Please, enter one of the anime titles: ${allowedTitles.join(', ')}.`;
    return Promise.resolve({ error });
  }

  const url = getAnimeSearchUrl(currentTitle);
  if (!isCurrentTitleDataLoaded()) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          const error = `No results were found for "${currentTitle}". 
          Make sure the request was submitted without errors.`;
          return Promise.resolve({ error });
        }
        return { data };
      });
  }

  return Promise.resolve({});
}

function performSearch(animeTitle) {
  window.dataStore.currentTitle = animeTitle;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;

  window
    .validateAndLoadData()
    .then(({ error, data }) => {
      window.dataStore.isDataLoading = false;
      if (error) {
        window.dataStore.error = error;
      } else if (data) {
        window.dataStore.cashOfAnimeSearch[animeTitle] = data.results;
      }
    })
    .catch(() => {
      window.dataStore.error = 'Happened some error.';
    })
    .finally(() => {
      window.renderApp();
    });
}

renderApp();

function renderApp() {
  document.querySelector('#app').innerHTML = App();
}

function AnimeCardsResults() {
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

function App() {
  return `${Header()}
          ${SortForm()}
          ${AnimeCardsResults()}`;
}
function Header() {
  return `<header class="${styles.header}">
            <h1 class="${styles.headerH1}" title="* read like Tsundoku">積ん読 *</h1>
          </header>`;
}
function SortForm() {
  return ` <div class="${styles.sectionForm}">
              <form class="${styles.sortForm}" id="sortForm" name="sortForm" onsubmit="return false;">
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
                onchange="window.performSearch(this.value)"
                autofocus
          />`;
}
function ApplyButtonSortForm() {
  return `<button class="${styles.formButton}" 
                  id="formButton" 
                  type="button" 
                  name="searchButton">
                    Click me!
            </button>`;
}
function CardsList(animeSearch) {
  const form = document.forms.sortForm;
  const search = form.search.value;
  return `<main class="${styles.main}">
            <div class="${styles.cardsItems}" id="cardsItems">
              ${animeSearch
                .filter(anime => {
                  if (anime.rated === 'Rx') return false;
                  else if (!anime.title.toLowerCase().includes(search.toLowerCase())) return false;
                  return true;
                })
                .map(card => Card(card))
                .join('')}
            </div>
          </main>
          ${Footer()}`;
}

function Card(card) {
  return `<div class="${styles.card}" id="${card.mal_id}">
            <div class="${styles.cardImgContainer}">
              <img class="${styles.cardImg}" src="${card.image_url}" alt="${card.title} poster" />
            </div>
            <div class="${styles.cardItemContainer}">
              <h3 class="${styles.cardItemH3}">${card.title}</h3>
              <span class="${styles.cardItemRating}">[${card.rated}]</span>
              <p class="${styles.cardItemText}">${card.synopsis}</p>
              <button class="${styles.cardButton}">More</button>
            </div>
          </div>`;
}

function Footer() {
  return `<footer class="${styles.footer}">
            <p class="${styles.githubProfile}"><a class="${styles.githubProfileLink}" href="https://github.com/smillims">GitHub Profile Author's</a></p>
            <p class="${styles.email}">If you have any recommendations: danil.liashchenko.uk@gmail.com</p>
          </footer>`;
}
