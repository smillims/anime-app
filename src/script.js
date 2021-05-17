import dataStore from './data/dataStore';
import renderApp from './framework/render.js';
import App from './components/App';

window.dataStore = dataStore;

renderApp(App, document.getElementById('app'));
