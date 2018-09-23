import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Card from './components/Card.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots'
import {searchRobots} from './reducers'

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,document.getElementById('root'));
registerServiceWorker();
