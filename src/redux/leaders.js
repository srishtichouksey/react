import * as ActionTypes from './Actiontypes';

export const Leaders = (state={
	isLoading: true,
	errmess: null,
	leaders: []
}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_LEADERS:
			return {...state, isLoading:false, errmess: null, leaders: action.payload}; /* ...state spred operator */
		case ActionTypes.LEADERS_FAILED:
			return {...state, isLoading:false, errmess: action.payload, leaders: []};
		case ActionTypes.LEADERS_LOADING:
			return {...state, isLoading: true, errmess: null, leaders: []};
		default:
			return state;
	}
}