const selectedLi = document.getElementsByClassName(`selected_ingredients`)[0].querySelector(`ul`);

export function addSelectedIngredients (liB) {
    const li = document.createElement(`li`);
    li.textContent = liB.textContent;
    li.dataset.price = liB.dataset.price;
    li.cloneNode(lib);
    selectedLi.append(li);
}

export function delSelectedIngredients (text) {
    selectedLi.querySelectorAll(`li`).forEach(li => li.textContent === text ? li.remove() : true);
}
