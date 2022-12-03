const categoriesRef = document.querySelectorAll("#categories .item");
const subCategoriesRef = document.querySelectorAll(".item ul");

const numberOfCategories = categoriesRef.length;

console.log(`Number of categories: ${numberOfCategories}`);

const title = [...categoriesRef].map(
  (element) => element.firstElementChild.textContent
);

const numberOfSubCategories = [...subCategoriesRef].map(
  (elem) => elem.children.length
);

for (let i = 0; i < title.length; i += 1) {
  console.log(`Category:"${title[i]}"\nElements: ${numberOfSubCategories[i]}`);
}
