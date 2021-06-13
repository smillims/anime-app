import React from 'react';
import { useAnime } from '../../customHooks';
import Header from '../Header';
import SortForm from '../SortForm';
import AnimeCardsResults from '../AnimeCardsResults';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimeInfo from '../AnimeInfo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/anime-info/:id" component={AnimeInfo} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

function Main() {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useAnime();

  return (
    <>
      {/*<Header />*/}
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

export default App;
