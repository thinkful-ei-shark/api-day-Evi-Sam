import $ from 'jquery';

import 'normalize.css';
import api from './api';
import './index.css';
import store from './store'
import shoppingList from './shopping-list';

api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
