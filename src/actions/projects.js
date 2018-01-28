import uuid from 'uuid';
import database from '../firebase/firebase';

export const addProject = (project) => (
	{
		type: 'ADD_PROJECT',
		project
});

export const startAddProject = (projectData = {}) => {
	return (dispatch) => {
		const {
			description = '', 
			note = '', 
			skills = [], 
			createdAt = 0
		} = projectData;

		const project = { description, note, skills, createdAt };
		database.ref('projects').push(project).then((ref) => {
			dispatch(addProject({
				id: ref.key,
				...project
			}));
		});
	};
};

export const editProject = (id, updates) => ({
	type: 'EDIT_PROJECT',
	id,
	updates
});

export const startEditProject = (id, updates) => {
	return (dispatch) => {
		return database.ref(`projects/${id}`).update(updates).then(() => {
			dispatch(editProject(id, updates));
		});
	};
};

export const removeProject = ({ id } = {}) => ({
	type: 'REMOVE_PROJECT',
	id
});

export const startRemoveProject = ({ id } = {}) => {
	return (dispatch) => {
		return database.ref(`projects/${id}`).remove().then(() => {
			dispatch(removeProject({ id }));
		});
	};
};

export const setProjects = (projects) => ({
	type: 'SET_PROJECTS',
	projects
});

export const startSetProjects = () => {
	return (dispatch) => {
		return database.ref('projects').once('value').then((snapshot) => {
			const projects = [];

			snapshot.forEach((childSnaphot) => {
				projects.push({
					id: childSnaphot.key,
					...childSnaphot.val()
				});
			});

			dispatch(setProjects(projects));
		});
	};
}
