import database from '../firebase/firebase';

export const addProfile = (
	{
		userId = '',
		name = '',
		lastName = '',
		skillset = [],
		projectId = ''
	} = {}) => (
	{
		type: 'ADD_PROFILE',
		profile: {
			userId,
			name,
			lastName,
			skillset,
			projectId
		}
});

export const startAddProfile = (profileData = {}) => {
	return (dispatch) => {
		const {
			userId = '', 
			name = '', 
			lastName = '', 
			skillset = [],
			projectId = ''
		} = profileData;

		const profile = { userId, name, lastName, skillset, projectId };
		database.ref('profiles').push(profile).then((ref) => {
			dispatch(addProfile({
				id: ref.key,
				...profile
			}));
		});
	};
};

export const editProfile = (id, updates) => ({
	type: 'EDIT_PROFILE',
	id,
	updates
});

export const startEditProfile = (id, updates) => {
	return (dispatch) => {
		return database.ref(`profiles/${id}`).update(updates).then(() => {
			dispatch(editProfile(id, updates));
		});
	};
};

export const removeProfile = ({ id } = {}) => ({
	type: 'REMOVE_PROFILE',
	id
});

export const startRemoveProfile = ({ id } = {}) => {
	return (dispatch) => {
		return database.ref(`profiles/${id}`).remove().then(() => {
			dispatch(removeProfile({ id }));
		});
	};
};

export const setProfiles = (profiles) => ({
	type: 'SET_PROFILES',
	profiles
});

export const startSetProfiles = () => {
	return (dispatch) => {
		return database.ref('profiles').once('value').then((snapshot) => {
			const profiles = [];

			snapshot.forEach((childSnaphot) => {
				profiles.push({
					id: childSnaphot.key,
					...childSnaphot.val()
				});
			});

			dispatch(setProfiles(profiles));
		});
	};
}