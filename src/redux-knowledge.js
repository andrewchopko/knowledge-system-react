import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_PROJECT

const addProject = (
	{ description = '', 
		note = '', 
		skills = [], 
		createdAt = 0 
	} = {}) => (
	{
		type: 'ADD_PROJECT',
		project: {
			id: uuid(),
			description,
			note,
			skills,
			createdAt
		}
});

// ADD_PROFILE
// EDIT_PROJECT
// EDIT_PROFILE
// REMOVE_PROJECT
// REMOVE_PROFILE

// Project Reducer

const projectReducerDefaultState = [];

const projectsReducer = (state = projectReducerDefaultState, action ) => {
	switch(action.type){
		case 'ADD_PROJECT':
			return [
				...state,
				action.project
			];
		default:
			return state;
	}
};

const profileReducerDefaultState = [];

const profilesReducer = (state = profileReducerDefaultState, action ) => {
	switch(action.type){
		default:
			return state;
	}
};

const store = createStore(
	combineReducers({
		projects: projectsReducer,
		profiles: profilesReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addProject({
	description: "Knowledge system",
	skills: ["react", "redux", "router"],
	note: 'Experienced developers only'
}));

const demoState = {
	projects: [{
		id: 'siwhiwsmwsjide',
		description: 'Some project description',
		note: 'Some note for the project',
		skills: [],
		createdAt: 0
	}],
	profiles: [{
		id: 'some-profile-id',
		name: 'Name',
		lastName: 'lastName',
		skillset: ['skill 1', 'skill 2', 'skill 3']
	}]
};