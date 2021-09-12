import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/price.js';

const maxSel1 = (e) => {
    if(e.target.tagName !== `UL`) {
        if (e.target.classList.contains(`selected_li`)) {
            delSelectedIngredients(e.target.textContent);
            e.target.classList.remove(`selected_li`);
        } else {
            if  (e.target.parentElement.getElementsByClassName(`selected_li`).length) {
                delSelectedIngredients(e.target.parentElement.getElementsByClassName(`selected_li`)[0].textContent);
                e.target.parentElement.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
            }
            e.target.classList.add(`selected_li`);
            addSelectedIngredients(e.target);
        }
        showPrice();
    }
    console.dir(e.target);
};

export {maxSel1};
