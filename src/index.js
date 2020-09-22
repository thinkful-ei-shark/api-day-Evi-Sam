import $ from 'jquery';

import 'normalize.css';
import api from './api.js';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
