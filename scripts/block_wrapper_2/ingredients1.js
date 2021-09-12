import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/price.js';
const ulIngredients1 = document.getElementsByClassName(`ingredients_wr`)[0];


function selectIngredients1Li (e) {
    if (e.target.classList.contains(`selected_li`)) {
        delSelectedIngredients(e.target.textContent);
        e.target.classList.remove(`selected_li`);
    } else {
        if  (ulIngredients1.getElementsByClassName(`selected_li`).length === 2) {
            delSelectedIngredients(ulIngredients1.getElementsByClassName(`selected_li`)[0].textContent);
            ulIngredients1.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
        }
        e.target.classList.add(`selected_li`);
        addSelectedIngredients(e.target);
    }
    console.log(e.target.dataset.price);
    showPrice();
};

export {selectIngredients1Li};