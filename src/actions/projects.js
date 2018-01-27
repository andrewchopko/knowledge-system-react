import uuid from 'uuid';

export const addProject = (
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

export const editProject = (id, updates) => ({
	type: 'EDIT_PROJECT',
	id,
	updates
});

export const removeProject = ({ id } = {}) => ({
	type: 'REMOVE_PROJECT',
	id
});
