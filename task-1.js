const listRef = document.querySelector("ul#categories");

console.log(`В списке ${listRef.childElementCount} категории.`);

const itemRef = document.querySelectorAll("li.item");
itemRef.forEach((itemChild) => {
  console.log(itemChild.children[0].textContent);
  console.log("Количество элементов:", itemChild.children[1].childElementCount);
});
