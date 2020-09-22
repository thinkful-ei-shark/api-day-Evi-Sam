import $ from 'jquery';

import 'normalize.css';
import api from './api';
import './index.css';
import store from './store'
import shoppingList from './shopping-list';

api.getItems()
.then(res => res.json())
.then((items) => {
  const item = items[0];
  return api.updateItem(item.id, { name: 'foobar' });
})
.then(res => res.json())
.then(() => console.log('updated!'));



const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
