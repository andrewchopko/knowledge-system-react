import { createStore, combineReducers, applyMiddleware } from 'redux';
import projectsReducer from '../reducers/projects';
import profilesReducer from '../reducers/profiles';
import userReducer from '../reducers/user';
import thunk from 'redux-thunk';


export default () => {
	const store = createStore(
		combineReducers({
			projects: projectsReducer,
			profiles: profilesReducer,
			user: userReducer
		}),
		applyMiddleware(thunk)
	);

	return store;
}