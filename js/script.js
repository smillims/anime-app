function startApp() {
  const url = 'https://api.jikan.moe/v3/anime/1';
  fetch(url)
  //.then(handleErrors)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.warn(err.message))
}

startApp();
