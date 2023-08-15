
import { deleteItem } from './../store/itemList.js'
export default function itemElement(props) {
    const li = document.createElement('li')

    li.textContent = props.text


    li.addEventListener('click', function () {
        deleteItem(props.id)
        props.deleteCompunent()
        props.createCompunete()
    })

    return li
}