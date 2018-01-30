import React from 'react';
import { connect } from 'react-redux';
import { startEditProfile } from '../actions/profiles'

const ProfilesListItem = (props) => {
	return (
		<div className="profile-layout">
			<h5 className="profile-layout__name">{`${props.name} ${props.lastName}`}</h5>
			<div className="profile-layout__skills">{props.skillset.join(' ')}</div>
			{!props.projectId && <button className="profile-layout__button" onClick={() => {
				props.dispatch(startEditProfile( props.id, { projectId: props.project }));
			}}>Connect to Team</button>}
	</div>
	);
};

export default connect()(ProfilesListItem);