import { useEffect, useState } from './framework';
import { validateAndLoadData } from './data/animeData';

export const useWeather = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [error, setError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [animeSearch, setAnimeSearch] = useState({});

  useEffect(() => {
    if (currentTitle) {
      validateAndLoadData(currentTitle)
        .then(data => {
          //** Don't forget about 'Loading...';
          const filterAnime = filterAnimeByTitle(data);

          if (!filterAnime.length) {
            const error = `No results were found for "${currentTitle}".
            Make sure the request was submitted without errors.`;
            throw Error(error);
          }

          setError(null);
          setAnimeSearch(filterAnime);
        })
        .catch(setError)
        .finally(() => setIsDataLoading(false));
    }
  }, [currentTitle]);

  function filterAnimeByTitle(data) {
    return data.results.filter(anime => {
      if (anime.rated === 'Rx') return false;
      else if (!anime.title.toLowerCase().includes(currentTitle.toLowerCase())) return false;
      return true;
    });
  }

  return {
    currentTitle,
    setCurrentTitle,
    error,
    isDataLoading,
    animeSearch,
  };
};
