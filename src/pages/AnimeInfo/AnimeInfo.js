import React, { useEffect, useState } from 'react';

function AnimeInfo({ id }) {
  console.log(id);

  //const [items, setItems] = useState([]);
  //const stringToUrl = `${id}`.replace(/\s+/g, '');
  //const url = `https://api.jikan.moe/v3/anime/${stringToUrl}`;
  //console.log(url, stringToUrl, id);
  //useEffect(() => {
  //  if (id) {
  //    fetch(url)
  //      .then(response => response.json())
  //      .then(data => {
  //        console.log(data);
  //        setItems(data);
  //      });
  //  }
  //}, []);

  return (
    <div>
      <h1>Anime Title</h1>
      <p>Anime Info</p>
    </div>
  );
}

export default AnimeInfo;
