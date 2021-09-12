import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/price.js';
const ulBase = document.getElementsByClassName(`base`)[0];

const selectBaseLi = (e) => {
    if (e.target.classList.contains(`selected_li`)) {
        delSelectedIngredients(e.target.textContent);
        e.target.classList.remove(`selected_li`);
    } else {
        if  (ulBase.getElementsByClassName(`selected_li`).length) {
            delSelectedIngredients(ulBase.getElementsByClassName(`selected_li`)[0].textContent);
            ulBase.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
        }
        e.target.classList.add(`selected_li`);
        addSelectedIngredients(e.target);
    }
    console.log(e.target.dataset.price);
    showPrice();
};

export {selectBaseLi};
