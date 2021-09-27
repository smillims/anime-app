function getAnimeSearchUrl(search) {
  const stringToUrl = search.replace(/\s+/g, '').toLowerCase();
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}

//const dataStore = {};

export function validateAndLoadData(currentTitle) {
  //const cashOfAnime = dataStore[currentTitle];

  //if (cashOfAnime) return cashOfAnime;

  const url = getAnimeSearchUrl(currentTitle);
  const fetchAPI = fetch(url).then(response => {
    //console.log(response, url)
    const results = response.json();
    //dataStore[currentTitle] = results;
    return results;
  });

  fetchAPI
    .then(res => console.log(res, 'res animeData'))
    .catch(err => console.log(err, 'err animeData'));

  return fetchAPI;
}
