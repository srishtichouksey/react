import * as Actiontypes from './Actiontypes';

export const Comments =(state = {
		errMess: null,
		comments: []
	}, action) => {
	switch (action.type) {

		case Actiontypes.ADD_COMMENTS:
			return {...state, errMess:null, comments:action.payload};

		case Actiontypes.COMMENTS_FAILED:
			return {...state, errMess:action.payload, comments: []};

		case Actiontypes.ADD_COMMENT:
			var comment = action.payload;
			return {...state, comments:state.comments.concat(comment)};

		default : 
			return state;
	}
}