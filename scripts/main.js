import { showPrice } from './block_wrapper1/block_wrapper1.1/price.js';
import {maxSel1} from './block_wrapper2/maxSel1.js';
import {MaxSel2} from './block_wrapper2/maxSel2.js';
import {ulBase, ulIngredients1, ulIngredients2, ulSauce} from './ingredients/ingredientsAdd.js';
import {selectedLi, delSelLi} from './block_wrapper1/block_wrapper1.1/selected_ingredients.js';
import { btn, btnOrder } from './block_wrapper1/block_wrapper1.2/btn.js';
import {chekKindLis} from './block_wrapper1/block_wrapper1.2/pizza.js';

btn.addEventListener(`click`, btnOrder);
showPrice();
chekKindLis();

ulBase.addEventListener(`click`, maxSel1);

ulIngredients1.addEventListener(`click`, MaxSel2);

ulIngredients2.addEventListener(`click`, MaxSel2);

ulSauce.addEventListener(`click`, maxSel1);

selectedLi.addEventListener(`click`, delSelLi);

