
import itemElement from './itemElement.js'


export default function itemListElement(props) {
    const ul = document.createElement('ul')
    props.items.forEach(element => {
        ul.appendChild(itemElement({
            id: element.id,
            text: element.text,
            createCompunete: function () { props.createCompunete() },
            deleteCompunent: function () { props.deleteCompunent() }
        }))
    });
    return ul;
}