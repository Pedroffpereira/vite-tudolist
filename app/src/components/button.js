export default function buttonlement(props) {
    const button = document.createElement('button');
    button.textContent = props.text;
    return button
}