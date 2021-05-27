function getAnimeSearchUrl(search) {
  const stringToUrl = search.replace(/\s+/g, '');
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}

export function validateAndLoadData(currentTitle) {
  const url = getAnimeSearchUrl(currentTitle);
  return fetch(url).then(response => {
    return response.json();
  });
}
