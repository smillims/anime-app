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

const animeTitles = ['One Piece', 'Tokyo Ghoul'];
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
    const error = `Enter one of the anime titles: ${allowedTitles.join(', ')}.`;
    return Promise.resolve({ error });
  }

  const url = getAnimeSearchUrl(currentTitle);
  if (!isCurrentTitleDataLoaded()) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
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

  let content = '';
  if (currentTitle === '') {
    content = 'Search anime whatever you like';
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
              <form class="${styles.sortForm}" id="sortForm" name="sortForm">
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
                    Button
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
                  else if (!anime.title.includes(search)) return false;
                  return true;
                })
                .map(card => Card(card))
                .join('')}
            </div>
          </main>`;
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
