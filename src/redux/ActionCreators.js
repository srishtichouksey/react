import * as Actiontypes from './Actiontypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
	type: Actiontypes.ADD_COMMENT,
	payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};


export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));
	
	return fetch(baseUrl + 'dishes')
		.then(response => {
			if(response.ok) {
				return response;
			} else {
				var error = new Error('Error'+ response.status + ':' + response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(dishes =>  dispatch(addDishes(dishes)))
		.catch(error => dispatch(dishesFailed(error.message)));
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


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
    	if(response.ok) {
    		return response;
    	} else {
    		var error = new Error('Error'+response.status+ ':' + response.statusText);
    		error.response = response;
    		throw error;
    	}
    }, error => {
    	var errmess = new Error(error.message);
    	throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: Actiontypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: Actiontypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading());
	
	return fetch(baseUrl + 'dishes')
		.then(response => {
	    	if(response.ok) {
	    		return response;
	    	} else {
	    		var error = new Error('Error'+response.status+ ':' + response.statusText);
	    		error.response = response;
	    		throw error;
	    	}
	    }, error => {
	    	var errmess = new Error(error.message);
	    	throw errmess;
	    })
		.then(response => response.json())
		.then(promos =>  dispatch(addPromos(promos)))
		.catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: Actiontypes.PROMOS_LOADING
});

export const addPromos = (promos) => ({
	type: Actiontypes.ADD_PROMOS,
	payload: promos
});

export const promosFailed = (errmess) => ({
	type: Actiontypes.PROMOS_FAILED,
	payload: errmess
});
