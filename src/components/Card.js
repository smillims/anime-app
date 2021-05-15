import styles from '../css/style.css';

export default function Card(card) {
  return `<div class="${styles.card}" id="${card.mal_id}">
            <div class="${styles.cardImgContainer}">
              <img class="${styles.cardImg}" src="${card.image_url}" alt="${card.title} poster" />
            </div>
            <div class="${styles.cardItemContainer}">
              <h3 class="${styles.cardItemH3}">${card.title}</h3>
              <span class="${styles.cardItemRating}">${card.score} / 10</span>
              <p class="${styles.cardItemText}">${card.synopsis}</p>
              <button class="${styles.cardButton}">More</button>
            </div>
          </div>`;
}
