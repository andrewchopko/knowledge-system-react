export const getDevelopersForProject = (profiles, { skills } = {}) => {
	return profiles.filter((profile) => {
		const profileHasProject = !profile.projectId;
		const hasRequiredSkill =  typeof skills !== 'object' || skills.some(skill => profile.skillset.indexOf(skill) >= 0);
		
		return profileHasProject && hasRequiredSkill;
	});
};

export const getDevsAtProject = (profiles, { id } ) => {
	return profiles.filter((profile) => {
		return profile.projectId === id;
	});
};