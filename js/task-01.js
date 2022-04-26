const refs = {
    listOfItems: document.querySelectorAll(`.item`),

}

console.log(`Number of categories:`, refs.listOfItems.length);
const itemName = refs.listOfItems.forEach((item) => {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.lastElementChild.children.length);
});




