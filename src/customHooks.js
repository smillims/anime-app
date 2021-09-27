import { useEffect, useState } from 'react';
import { validateAndLoadData } from './data/animeData';

export const useAnime = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [error, setError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [animeSearch, setAnimeSearch] = useState({});

  useEffect(() => {
    if (currentTitle !== '') {
      setIsDataLoading(true);
      validateAndLoadData(currentTitle)
        .then(data => {
          if (data === undefined) {
            console.log('UNDEFINED');
          }
          const { status, message } = data;
          const error = `No results were found for "${currentTitle}".
          Make sure the request was submitted without errors.`;
          const filterAnime = filterAnimeByTitle(data);

          console.log(data, filterAnime, currentTitle);

          if (status !== '200' && message) throw Error(error);

          if (filterAnime.length === 0) {
            throw Error(error);
          }

          setError(null);
          setAnimeSearch(filterAnime);
        })
        .catch(err => setError(err))
        .finally(() => setIsDataLoading(false));
    }
  }, [currentTitle]);

  function filterAnimeByTitle(data) {
    //начать дебажить тут
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
    setError,
    isDataLoading,
    setIsDataLoading,
    animeSearch,
  };
};
