import { showPrice } from './block_wrapper1/price.js';
import {selectBaseLi} from './block_wrapper_2/base.js';
import {selectIngredients1Li} from './block_wrapper_2/ingredients1.js';
import {selectIngredients2Li} from './block_wrapper_2/ingredients2.js';
import {selectSauceLi} from './block_wrapper_2/sauce.js';
import {ulBase, ulIngredients1, ulIngredients2, ulSauce} from './ingredients/ingredientsAdd.js';
import {selectedLi, delSelLi} from './block_wrapper1/selected_ingredients.js';

showPrice();
ulBase.addEventListener(`click`, selectBaseLi);

ulIngredients1.addEventListener(`click`, selectIngredients1Li);

ulIngredients2.addEventListener(`click`, selectIngredients2Li);

ulSauce.addEventListener(`click`, selectSauceLi);

selectedLi.addEventListener(`click`, delSelLi);

// в чем разница между установкой события li и ul здесь.
// кликается не li а font
