import { allowedTitles, getAnimeSearchUrl } from './animeSearchAPI';

export function isCurrentTitleDataLoaded() {
  const { cashOfAnimeSearch, currentTitle } = window.dataStore;
  return cashOfAnimeSearch[currentTitle];
}

export function validateAndLoadData() {
  const { currentTitle } = window.dataStore;

  if (!allowedTitles.map(anime => anime.toLowerCase()).includes(currentTitle.toLowerCase())) {
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

export function performSearch(animeTitle) {
  window.dataStore.currentTitle = animeTitle;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  window.renderApp();

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
