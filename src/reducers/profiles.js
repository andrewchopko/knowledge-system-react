
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
		case 'SET_PROFILES':
			return action.profiles;
		default:
			return state;
	}
};

export default profilesReducer;