/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import Header from '../components/Header';
import SortForm from '../components/SortForm';
import AnimeCardsResults from '../components/AnimeCardsResults';

export default function App() {
  return (
    <>
      <Header />
      <SortForm />
      <AnimeCardsResults />
    </>
  );
}
