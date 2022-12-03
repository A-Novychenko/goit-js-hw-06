// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

//

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
