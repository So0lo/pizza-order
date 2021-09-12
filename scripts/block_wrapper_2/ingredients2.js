import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/price.js';
const ulIngredients2 = document.getElementsByClassName(`ingredients_wr`)[1];


function selectIngredients2Li (e) {
    if (e.target.classList.contains(`selected_li`)) {
        delSelectedIngredients(e.target.textContent);
        e.target.classList.remove(`selected_li`);
    } else {
        if  (ulIngredients2.getElementsByClassName(`selected_li`).length === 2) {
            delSelectedIngredients(ulIngredients2.getElementsByClassName(`selected_li`)[0].textContent);
            ulIngredients2.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
        }
        e.target.classList.add(`selected_li`);
        addSelectedIngredients(e.target);
    }
    console.log(e.target.dataset.price);
    showPrice();
}

export {selectIngredients2Li};