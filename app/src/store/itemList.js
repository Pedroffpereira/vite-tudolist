const itemList = []

export function getItemList() {
    return itemList;
}
export function getItem() {

}
export function deleteItem(id) {

    const indexToRemove = itemList.findIndex((element) => element.id == id)
    itemList.splice(indexToRemove, 1);
}
export function editItem() {

}
export function addItem(item) {
    itemList.push(item)
}