import React from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../actions/profiles'

const ProfilesListItem = (props) => {
	return (
		<div>
			<h5>{props.name + " " + props.lastName}</h5>
			<div>{props.skillset.join(' ')}</div>
			{!props.projectId && <button onClick={() => {
				props.dispatch(editProfile( props.id, { projectId: props.project }));
			}}>Add developer to this project</button>}
	</div>
	);
};

export default connect()(ProfilesListItem);