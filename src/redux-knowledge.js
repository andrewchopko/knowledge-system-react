import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const demoState = {
	projects: [{
		id: 'siwhiwsmwsjide',
		description: 'Some project description',
		note: 'Some note for the project',
		skills: ['nodejs', 'html'],
		createdAt: 0
	}],
	profiles: [{
		id: 'some-profile-id',
		name: 'Name',
		lastName: 'lastName',
		skillset: ['skill 1', 'skill 2', 'skill 3']
	}]
};


// get free developers that have skills required in project
// -> get project skills
// -> match profiles by its skills
// -> return profiles

const getDevelopersForProject = (profiles, { skills } = {}) => {
	
	return profiles.filter((profile) => {
		const profileHasProject = !profile.projectId;    //!!profile.projectId;
		const hasRequiredSkill =  typeof skills !== 'object' || skills.some(skill => profile.skillset.indexOf(skill) >= 0);
		
		return profileHasProject && hasRequiredSkill;
	});
};


/////////

const test = (a, { b  = 11} ) => {
	const res = typeof b !== 'undefined'? "b is not undefined" : "b is undefined"
	console.log(a, b);
}

const obj = {
	b: 12
}

//test(10, obj);

/////////



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

const addProfile = (
	{
		name = '',
		lastName = '',
		skillset = [],
		projectId = ''
	} = {}) => (
	{
		type: 'ADD_PROFILE',
		profile: {
			id: uuid(),
			name,
			lastName,
			skillset,
			projectId
		}
});

// EDIT_PROJECT

const editProject = (id, updates) => ({
	type: 'EDIT_PROJECT',
	id,
	updates
})

// EDIT_PROFILE

const editProfile = (id, updates) => ({
	type: 'EDIT_PROFILE',
	id,
	updates
});

// REMOVE_PROJECT

const removeProject = ({ id } = {}) => ({
	type: 'REMOVE_PROJECT',
	id
});

// REMOVE_PROFILE

const removeProfile = ({ id } = {}) => ({
	type: 'REMOVE_PROFILE',
	id
});

// Project Reducer

const projectReducerDefaultState = [];

const projectsReducer = (state = projectReducerDefaultState, action ) => {
	switch(action.type){
		case 'ADD_PROJECT':
			return [
				...state,
				action.project
			];
		case 'REMOVE_PROJECT':
			return state.filter(({ id }) => id !== action.id );
		case 'EDIT_PROJECT':
			return state.map((project) => {
				if (project.id === action.id){
					return {
						...project,
						...action.updates
					}
				}else {
					return project;
				}
			});
		default:
			return state;
	}
};

const profileReducerDefaultState = [];

const profilesReducer = (state = profileReducerDefaultState, action ) => {
	switch(action.type){
		case 'ADD_PROFILE':
			return [
				...state,
				action.profile
			];
		case 'EDIT_PROFILE':
			return state.map((profile) => {
				if(profile.id === action.id){
					return {
						...profile,
						...action.updates
					}
				}else{
					return profile;
				}
			});
		case 'REMOVE_PROFILE':
			return state.filter(({ id }) => id !== action.id);
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
	const state = store.getState();
	//console.log(demoState.projects[0]);
	
});

const projectOne = store.dispatch(addProject({
	description: "Knowledge system",
	skills: ["react", "redux", "router"],
	note: 'Experienced developers only'
}));

const projectTwo = store.dispatch(addProject({
	description: "Some description for second project",
	skills: ["html", "nodejs", "redux", "router"]
}));

store.dispatch(removeProject({ id: projectOne.project.id }));

store.dispatch(editProject( projectTwo.project.id, { description: "Changed description", note: "Added note to this project" }));

const profileOne = store.dispatch(addProfile({
	name: "Andrew",
	lastName: "Chopko",
	skillset: ["redux", "router"],
	projectId: 'dugdeyuebdnled'
}));

store.dispatch(addProfile({
	name: "Vasiliy",
	lastName: "Pupkin",
	skillset: ["nodejs", "html"]
}));

store.dispatch(addProfile({
	name: "Dulya",
	lastName: "Pupkin",
	skillset: ["c++"]
}));

store.dispatch(addProfile({
	name: "Gabr",
	lastName: "Pupkin",
	skillset: ["java", "nodejs"],
	projectId: 'deugdxluhduyevdb'
}));

console.log(getDevelopersForProject(store.getState().profiles, projectTwo.project));
//store.dispatch(removeProfile({ id: profileOne.profile.id }));

//console.log(getDevelopersForProject(state.profiles, projectTwo));
