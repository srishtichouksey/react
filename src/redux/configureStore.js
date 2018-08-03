import { createStore , combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

/* It returns a store it accept parameterts reducer  and initialState */
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers ({
			dishes : Dishes,
			comments : Comments,
			leaders : Leaders,
			promotions  : Promotions
		})
	);

	return store;
}