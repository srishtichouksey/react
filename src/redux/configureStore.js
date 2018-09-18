import { createStore , combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';  /*It is a middleware*/
import logger from 'redux-logger'; /*It is a middleware*/

/* It returns a store it accept parameterts reducer  and initialState */
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers ({
			dishes : Dishes,
			comments : Comments,
			leaders : Leaders,
			promotions  : Promotions
		}),
		applyMiddleware(thunk, logger)     /*work as inhancer*/
	);
	return store;
}