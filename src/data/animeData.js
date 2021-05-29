function getAnimeSearchUrl(search) {
  const stringToUrl = search.replace(/\s+/g, '');
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}

const dataStore = {};

export function validateAndLoadData(currentTitle) {
  const cashOfAnime = dataStore[currentTitle];

  if (cashOfAnime) return cashOfAnime;

  const url = getAnimeSearchUrl(currentTitle);
  return fetch(url).then(response => {
    const results = response.json();
    dataStore[currentTitle] = results;
    return results;
  });
}
