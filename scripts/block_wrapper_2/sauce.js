import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/price.js';
const ulSauce = document.getElementsByClassName(`sauce`)[0];

const selectSauceLi = (e) => {
    if (e.target.classList.contains(`selected_li`)) {
        delSelectedIngredients(e.target.textContent);
        e.target.classList.remove(`selected_li`);
    } else {
        if  (ulSauce.getElementsByClassName(`selected_li`).length) {
            delSelectedIngredients(ulSauce.getElementsByClassName(`selected_li`)[0].textContent);
            ulSauce.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
        }
        e.target.classList.add(`selected_li`);
        addSelectedIngredients(e.target);
    }
    console.log(e.target.dataset.price);
    showPrice();
};

export {selectSauceLi};