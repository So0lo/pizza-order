import {delSelectedIngredients} from './add_del_ingredients.js';
import { showPrice } from './price.js';

export const selectedLi = document.getElementsByClassName(`selected_ingredients`)[0].querySelector(`ul`);
const blWr2Li = document.getElementsByClassName(`block_wrapper2`)[0].querySelectorAll(`li`);

export function delSelLi (e) {
    delSelectedIngredients(e.target.textContent);
    [...blWr2Li].forEach(li => li.textContent === e.target.textContent ? li.classList.remove(`selected_li`) : true);
    showPrice();
}
