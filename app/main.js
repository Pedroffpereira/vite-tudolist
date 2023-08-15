
import itemListElement from './src/components/itemListElement.js'
import { getItemList } from './src/store/itemList.js'
import formElement from './src/components/form.js'

const deleteCompunent = function () {
    const app = document.querySelector('#app');
    while (app.firstChild) {
        app.removeChild(app.lastChild);
    }

}

const createCompunete = function () {
    document.querySelector('#app').appendChild(itemListElement({ items: getItemList(), createCompunete, deleteCompunent }))
    document.querySelector('#app').appendChild(formElement({ createCompunete, deleteCompunent }))
}

createCompunete()