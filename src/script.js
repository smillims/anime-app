import dataStore from './data/dataStore';
import renderApp from './framework/render.js';
import { performSearch, validateAndLoadData } from './data/animeData';
import App from './components/App';

window.dataStore = dataStore;

window.renderApp = renderApp;
window.performSearch = performSearch;
window.validateAndLoadData = validateAndLoadData;

renderApp(App, '#app');
