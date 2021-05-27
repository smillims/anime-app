/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useEffect, useState } from '../../framework';
import { validateAndLoadData } from '../../data/animeData';
import Header from '../Header';
import SortForm from '../SortForm';
import AnimeCardsResults from '../AnimeCardsResults';

export default function App() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [error, setError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cashOfAnimeSearch, setCashOfAnimeSearch] = useState({});

  useEffect(() => {
    if (currentTitle) {
      validateAndLoadData(currentTitle)
        .then(data => {
          const { message, code } = data;

          if (code !== '200' && message) throw Error(message);

          const filterAnime = filterAnimeByTitle(data);

          setError(null);
          setCashOfAnimeSearch(filterAnime);
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

  return (
    <>
      <Header />
      <SortForm onSubmit={setCurrentTitle} value={currentTitle} />
      <AnimeCardsResults
        currentTitle={currentTitle}
        error={error}
        isDataLoading={isDataLoading}
        cashOfAnimeSearch={cashOfAnimeSearch}
      />
    </>
  );
}
