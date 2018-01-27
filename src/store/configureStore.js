import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projects';
import profilesReducer from '../reducers/profiles';


export default () => {
	const store = createStore(
		combineReducers({
			projects: projectsReducer,
			profiles: profilesReducer
		})
	);

	return store;
}