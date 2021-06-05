import React from 'react';
import { useWeather } from '../../customHooks';
import Header from '../Header';
import SortForm from '../SortForm';
import AnimeCardsResults from '../AnimeCardsResults';

export default function App() {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useWeather();

  return (
    <>
      <Header />
      <SortForm onSubmit={setCurrentTitle} value={currentTitle} />
      <AnimeCardsResults
        currentTitle={currentTitle}
        error={error}
        isDataLoading={isDataLoading}
        animeSearch={animeSearch}
      />
    </>
  );
}
