import Header from '../components/Header';
import SortForm from '../components/SortForm';
import AnimeCardsResults from '../components/AnimeCardsResults';

export default function App() {
  return `${Header()}
          ${SortForm()}
          ${AnimeCardsResults()}`;
}
