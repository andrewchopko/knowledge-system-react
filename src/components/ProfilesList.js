import React from 'react';
import { connect } from 'react-redux';
import ProfilesListItem from './ProfilesListItem';
import { getDevelopersForProject, getDevsAtProject } from '../selectors/projects';

const ProfilesList = (props) => (
	<div className="profiles-layout">
		<div>
			<div className="profiles-layout__title">Available Developers</div>
			{props.freeDevs.map((profile) => {
				return <ProfilesListItem key={profile.id} project={props.projectId} { ...profile } />
			})}
		</div>
		<div>
			<div className="profiles-layout__title">Project Team</div>
				{props.devsAtProject.map((profile) => {
					return <ProfilesListItem key={profile.id} { ...profile } />
				})}
		</div>
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