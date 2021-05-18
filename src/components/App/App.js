/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Header from '../Header/Header';
import SortForm from '../SortForm/SortForm';
import AnimeCardsResults from '../AnimeCardsResults/AnimeCardsResults';

export default function App() {
  return (
    <>
      <Header />
      <SortForm />
      <AnimeCardsResults />
    </>
  );
}
