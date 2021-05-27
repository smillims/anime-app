/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import { paragraphOfState } from './style.css';
import CardsList from '../CardsList';

export default function AnimeCardsResults({
  currentTitle,
  error,
  isDataLoading,
  cashOfAnimeSearch,
}) {
  if (currentTitle === '') {
    return (
      <div class={paragraphOfState}>
        <p>Good day (or evening)!</p>
        <p>You could search anime whatever you like!</p>
      </div>
    );
  }

  if (isDataLoading) {
    return <div class={paragraphOfState}>Loading...</div>;
  }

  if (error) {
    return <div class={paragraphOfState}>{error}</div>;
  }

  return <div class={paragraphOfState}>{CardsList(cashOfAnimeSearch)}</div>;
}
