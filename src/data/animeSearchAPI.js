export function getAnimeSearchUrl(search) {
  const stringToUrl = search.replace(/\s+/g, '');
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}
