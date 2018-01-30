export const getUserProfile = (profiles, id) => {
	return profiles.find((profile) => {
		return profile.userId === id;
	});
};