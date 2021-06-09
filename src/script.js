import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import AnimeInfo from './pages/AnimeInfo';

const state = 'main';
window.state = state;

if (state === 'main') {
  render(<App state={state} />, document.getElementById('app'));
} else if (state === 'animeMore') {
  render(<AnimeInfo />, document.getElementById('app'));
}
