import * as Actiontypes from './Actiontypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author,comment) => ({
	type: Actiontypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});

export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));
	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
}

export const dishesLoading = () => ({
	type: Actiontypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
	type: Actiontypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) => ({
    type: Actiontypes.ADD_DISHES,
    payload: dishes
});