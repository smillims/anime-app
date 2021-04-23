import { results } from './api-json';
import styles from '../css/style.css';

const header = document.querySelector('.header');
const headerH1 = document.querySelector('.headerH1');

const sectionForm = document.querySelector('#sectionForm');
const sortForm = document.querySelector('.sortForm');
const blockSearch = document.querySelector('.blockSearch');
const search = document.querySelector('.search');
const formButton = document.querySelector('.formButton');

const main = document.querySelector('.main');
const cardsItems = document.createElement('div');

main.appendChild(cardsItems);

function addStyles(styles) {
  sectionForm.classList.add(styles.sectionForm);
  sortForm.classList.add(styles.sortForm);
  blockSearch.classList.add(styles.blockSearch);
  search.classList.add(styles.search);
  formButton.classList.add(styles.formButton);
  header.classList.add(styles.header);
  headerH1.classList.add(styles.headerH1);
  main.classList.add(styles.main);
  cardsItems.classList.add(styles.cardsItems);
}

addStyles(styles);

formButton.addEventListener('click', () => {
  render(filterSearch(results));
});

function render(listOfAnime) {
  cardsItems.innerHTML = makeCards(listOfAnime);
}

function makeCards(listOfAnime) {
  return listOfAnime.map(list => generateCard(list)).join('');
}

function generateCard(list) {
  return `<div class="${styles.card}" id="${list.mal_id}">
            <img src="${list.image_url}" alt="${list.title} poster">
            <div class="${styles.cardItemContainer}">
              <h3 class="${styles.cardItemH3}">${list.title} <span class="${styles.cardItemRating}">[${list.rated}]</span></h3>
              <p class="${styles.cardItemText}">${list.synopsis}</p>
            </div>
          </div>`;
}

function filterSearch(anime) {
  const form = document.forms.sortForm;
  const search = form.search.value;
  return anime.filter(animeItem => {
    // eslint-disable-next-line prettier/prettier
    if (!`${animeItem.title}`.toLowerCase().includes(search.toLowerCase()) && search) return false;
    return true;
  });
}

render(results);
