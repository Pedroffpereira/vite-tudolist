export default function inputlement(props) {
    const input = document.createElement('input');

    input.addEventListener('change', function () {
        props.itemName = this.value;
    })

    return input
}