import * as Actiontypes from './Actiontypes';

export const addComment = (dishId, rating, author,comment) => ({
	type: Actiontypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});