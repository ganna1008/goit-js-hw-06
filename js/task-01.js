const categoriesEl = document.getElementById("categories");

console.log('Number of categories:', categoriesEl.children.length);


const list = categoriesEl.querySelectorAll(".item");

const names = list.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelector("ul").children.length);
});
