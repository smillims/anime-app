import styles from '../css/style.css';
import Card from './Card';
import Footer from './Footer';

export default function CardsList(animeSearch) {
  const form = document.forms.sortForm;
  const search = form.search.value;
  return `<main class="${styles.main}">
            <div class="${styles.cardsItems}" id="cardsItems">
              ${animeSearch
                .filter(anime => {
                  if (anime.rated === 'Rx') return false;
                  else if (!anime.title.toLowerCase().includes(search.toLowerCase())) return false;
                  return true;
                })
                .map(card => Card(card))
                .join('')}
            </div>
          </main>
          ${Footer()}`;
}
