import React, { useState } from 'react';
import { useWeather } from '../../customHooks';
import Header from '../Header';
import SortForm from '../SortForm';
import AnimeCardsResults from '../AnimeCardsResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimeInfo from '../../pages/AnimeInfo/AnimeInfo';

export default function App() {
  const [animeId, setAnimeId] = useState(0);
  console.log(animeId);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <MainPage setAnimeId={setAnimeId} />} />
          <Route path="/more" render={() => <AnimeInfo id={animeId} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

function MainPage({ setAnimeId, animeId }) {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useWeather();
  return (
    <>
      <SortForm onSubmit={setCurrentTitle} value={currentTitle} />
      <AnimeCardsResults
        currentTitle={currentTitle}
        error={error}
        isDataLoading={isDataLoading}
        animeSearch={animeSearch}
        setAnimeId={setAnimeId}
        animeId={animeId}
      />
    </>
  );
}
