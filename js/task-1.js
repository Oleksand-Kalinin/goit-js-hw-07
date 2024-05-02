const arrAnimalsCategories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${arrAnimalsCategories.length}`);

arrAnimalsCategories.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
});