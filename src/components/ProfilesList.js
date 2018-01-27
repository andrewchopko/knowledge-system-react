import React from 'react';
import { connect } from 'react-redux';
import ProfilesListItem from './ProfilesListItem';
import { getDevelopersForProject, getDevsAtProject } from '../selectors/projects';

const ProfilesList = (props) => (
	<div>
		<div>
			<h2>Free Developers for this project</h2>
			{props.freeDevs.map((profile) => {
				return <ProfilesListItem key={profile.id} project={props.projectId} { ...profile } />
			})}
		</div>
		<div>Developers at this project</div>
			{props.devsAtProject.map((profile) => {
				return <ProfilesListItem key={profile.id} { ...profile } />
			})}
	</div>
);

const mapStateToProps = (state, props) => {
	const project = state.projects.find((project) => project.id === props.projectId);
	return {
		freeDevs: getDevelopersForProject(state.profiles, project),
		devsAtProject: getDevsAtProject(state.profiles, project),
		projectId: props.projectId
	};
}

export default connect(mapStateToProps)(ProfilesList);