import React from 'react';
import styles from './style.css';

function AnimeDetailPage({ error, isDataLoading, animeDetail }) {
  if (isDataLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>{error}</p>;
  }

  function checkOnNull(item) {
    if (item === null || item === undefined) {
      return <b>No info</b>;
    }
    return item;
  }

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
              <li>Rating</li>
            </ul>
            <ul className={styles.listInformationValue}>
              <li>{checkOnNull(type)}</li>
              <li>{checkOnNull(episodes)}</li>
              <li>{checkOnNull(status)}</li>
              <li>{checkOnNull(duration)}</li>
              <li>{checkOnNull(premiered)}</li>
              <li>{checkOnNull(rating)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.synopsis}>
        <p>{checkOnNull(synopsis)}</p>
      </div>
    </div>
  );
}

export default AnimeDetailPage;
