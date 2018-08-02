import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

/* It returns a store it accept parameterts reducer  and initialState */
export const ConfigureStore = () => {
	const store = createStore(
		Reducer,
		initialState
	);

	return store;
}