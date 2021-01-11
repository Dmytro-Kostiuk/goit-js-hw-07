const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');


ingredients.forEach(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;

    listRef.appendChild(itemRef);
});
