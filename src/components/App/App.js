import React from 'react';
import { useWeather } from '../../customHooks';
import Header from '../Header';
import SortForm from '../SortForm';
import AnimeCardsResults from '../AnimeCardsResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimeInfo from '../../pages/AnimeInfo/AnimeInfo';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/more" component={AnimeInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

function MainPage() {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useWeather();
  return (
    <>
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
