const animeTitles = ['One Piece', 'Tokyo Ghoul', 'Naruto'];
export const allowedTitles = Object.values(animeTitles);

export function getAnimeSearchUrl(search) {
  const checkTitle = allowedTitles.filter(animeTitle => animeTitle.toLowerCase() === search.toLowerCase());
  const stringToUrl = checkTitle.join().replace(/\s+/g, '');
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
}
