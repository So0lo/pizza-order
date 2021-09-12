import { showPrice } from './block_wrapper1/price.js';
import {maxSel1} from './block_wrapper_2/maxSel1.js';
import {MaxSel2} from './block_wrapper_2/maxSel2.js';
import {ulBase, ulIngredients1, ulIngredients2, ulSauce} from './ingredients/ingredientsAdd.js';
import {selectedLi, delSelLi} from './block_wrapper1/selected_ingredients.js';

showPrice();
// const li = ulBase.querySelectorAll(`li`);
// console.log(li);
// [...li].forEach(el => el.addEventListener(`click`, maxSel1));

ulBase.addEventListener(`click`, maxSel1);

ulIngredients1.addEventListener(`click`, MaxSel2);

ulIngredients2.addEventListener(`click`, MaxSel2);

ulSauce.addEventListener(`click`, maxSel1);

selectedLi.addEventListener(`click`, delSelLi);

