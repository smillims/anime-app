import React, { useEffect, useState } from 'react';
import AnimeDetailPage from '../AnimeDetailPage';
import { useAnime } from '../../customHooks';

function AnimeInfo() {
  const [animeDetail, setAnimeDetail] = useState({});
  const { error, setError, isDataLoading, setIsDataLoading } = useAnime();

  const animeID = location.pathname
    .split('/')
    .filter(item => item >= 1)
    .join('');

  const url = `https://api.jikan.moe/v3/anime/${animeID}`;

  useEffect(() => {
    setIsDataLoading(true);
    if (animeID) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setAnimeDetail(data);
          setError(null);
        })
        .catch(setError)
        .finally(() => setIsDataLoading(false));
    }
  }, [animeID]);

  return <AnimeDetailPage error={error} isDataLoading={isDataLoading} animeDetail={animeDetail} />;
}

export default AnimeInfo;
