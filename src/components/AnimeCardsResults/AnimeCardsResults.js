import React from 'react';
import { paragraphOfState } from './style.css';
import CardsList from '../CardsList';

function AnimeCardsResults({ currentTitle, error, isDataLoading, animeSearch }) {
  if (currentTitle === '') {
    return (
      <div className={paragraphOfState}>
        <p>Good day (or evening)!</p>
        <p>You could search anime whatever you like!</p>
      </div>
    );
  }

  if (isDataLoading) {
    return <div className={paragraphOfState}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={paragraphOfState}>{typeof error === 'object' ? error.toString() : error}</div>
    );
  }

  return (
    <div className={paragraphOfState}>
      <CardsList animeSearch={animeSearch} />
    </div>
  );
}

export default AnimeCardsResults;
