/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import Header from './Header';
import SortForm from './SortForm';
import AnimeCardsResults from './AnimeCardsResults';

export default function App() {
  return (
    <>
      <Header />
      <SortForm />
      <AnimeCardsResults />
    </>
  );
}
