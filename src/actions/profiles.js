import uuid from 'uuid';

export const addProfile = (
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

export const editProfile = (id, updates) => ({
	type: 'EDIT_PROFILE',
	id,
	updates
});

export const removeProfile = ({ id } = {}) => ({
	type: 'REMOVE_PROFILE',
	id
});

