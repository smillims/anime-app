import React from 'react';
import styles from './style.css';

function AnimeDetailPage({ animeDetail }) {
  if (Object.keys(animeDetail).length == 0) return 'Please, wait some seconds or reload the page';

  const checkOnNull = item => (item === null ? <b>No info</b> : item);

  const {
    image_url,
    score,
    title,
    type,
    episodes,
    status,
    duration,
    premiered,
    synopsis,
    rating,
    aired,
    //!!on future update
    //trailer_url,
  } = animeDetail;

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <img className={styles.poster} src={image_url} alt="poster" />
        <div className={styles.information}>
          <header className={styles.header}>
            <span>{checkOnNull(score)} / 10</span>
            <h1>{checkOnNull(title)}</h1>
          </header>
          <div className={styles.listInformation}>
            <ul className={styles.listInformationKey}>
              <li>Type</li>
              <li>Episodes</li>
              <li>Status</li>
              <li>Duration</li>
              <li>Premiered</li>
              <li>Aired</li>
              <li>Rating</li>
            </ul>
            <ul className={styles.listInformationValue}>
              <li>{checkOnNull(type)}</li>
              <li>{checkOnNull(episodes)}</li>
              <li>{checkOnNull(status)}</li>
              <li>{checkOnNull(duration)}</li>
              <li>{checkOnNull(premiered)}</li>
              <li>{checkOnNull(aired.string)}</li>
              <li>{checkOnNull(rating)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.synopsis}>
        <h3>Synopsis</h3>
        <p>{checkOnNull(synopsis)}</p>
      </div>
      {/*<div className={styles.trailer}>
        <h3>Trailer</h3>
        <form className={styles.trailerForm}>
          <iframe name="iframe" src={trailer_url}></iframe>
        </form>
      </div>*/}
    </div>
  );
}

export default AnimeDetailPage;
