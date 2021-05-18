import { getAnimeSearchUrl } from './animeSearchAPI';
import renderApp from '../framework/render';

export function isCurrentTitleDataLoaded() {
  const { cashOfAnimeSearch, currentTitle } = window.dataStore;
  return cashOfAnimeSearch[currentTitle];
}

function validateAndLoadData() {
  const { currentTitle } = window.dataStore;

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

export function performSearch(animeTitle) {
  window.dataStore.currentTitle = animeTitle;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  renderApp();

  validateAndLoadData()
    .then(({ error, data }) => {
      window.dataStore.isDataLoading = false;
      const filterAnime = filterAnimeByTitle(data);
      if (error) {
        window.dataStore.error = error;
      } else if (!filterAnime.length) {
        window.dataStore.error = `No results were found for "${window.dataStore.currentTitle}".
        Make sure the request was submitted without errors. `;
      } else {
        window.dataStore.cashOfAnimeSearch[animeTitle] = filterAnime;
      }
    })
    .catch(() => {
      window.dataStore.error = 'Happened some error.';
    })
    .finally(() => {
      renderApp();
    });
}

function filterAnimeByTitle(data) {
  return data.results.filter(anime => {
    if (anime.rated === 'Rx') return false;
    else if (!anime.title.toLowerCase().includes(window.dataStore.currentTitle.toLowerCase()))
      return false;
    return true;
  });
}
