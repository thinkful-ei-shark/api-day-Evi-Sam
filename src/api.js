const baseURL = 'https://thinkful-list-api.herokuapp.com/sam-evi/'

function getItems () {
     return fetch(`${baseURL}items`)
}

function createItem(name) {
    const newItem = JSON.stringify({name: name});
   return fetch(`${baseURL}items`, {
       method: 'POST', 
       headers: {
        'Content-Type': 'application/json'
    }, 
       body: newItem
    });
}

function updateItem(id, updateData) {
    const body = JSON.stringify(updateData);
    return fetch(`${baseURL}items/${id}`, {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body
    });
}

export default {
    getItems, 
    createItem, 
    updateItem
}