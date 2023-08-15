
import inputlement from './input.js'

import buttonlement from './button.js'
import { addItem, getItemList } from './../store/itemList.js'
import Item from './../models/item.js'

export default function formElement(props) {
    const formData = {
        itemName: null
    }


    const buttonParm = {
        text: 'submit'
    }

    const form = document.createElement('form');

    form.appendChild(inputlement(formData))

    form.addEventListener("submit", function (event) {
        props.deleteCompunent()
        event.preventDefault();
        addItem(new Item(getItemList.length, formData.itemName))
        props.createCompunete()

    })
    form.appendChild(buttonlement(buttonParm))
    return form
}