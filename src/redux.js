import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
	type: 'SET',
	count
});

const store = createStore((state = { count: 0}, action) => {
	switch (action.type){
		case 'INCREMENT':
			const incBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incBy
			};
		case 'DECREMENT':
			const decBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			const count = action.count ? action.count : 0;
			return {
				count: count
			};
		default:
			return state;
	}
	return state;
});

store.subscribe(() => {
	console.log(store.getState());
});


//Actions
store.dispatch({
	type: 'INCREMENT',
	incrementBy: 10
});

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch({
	type: 'DECREMENT'
});

store.dispatch({
	type: 'DECREMENT'
});

store.dispatch({
	type: 'DECREMENT'
});

store.dispatch({
	type: 'RESET'
});

store.dispatch(setCount({ count: 1200 }));