const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  id: document.querySelector(`#ingredients`),
}
const createEl = ingredients.map((ingredient) => {
 const element = document.createElement("li");
 console.log(element);
 element.textContent = ingredient; 
 element.classList.add("item");
 return element;

 });

refs.id.append(...createEl);

