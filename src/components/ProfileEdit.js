import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { editProfile } from '../actions/profiles';

const ProfileEdit = (props) => {
	return (
		<div>
			<h2>Edit Profile</h2>
			<ProfileForm
				profile={props.profile}
				onSubmit={(profile) => {
					props.dispatch(editProfile(props.profile.id, profile));
					props.history.push('/');
				}}
			/>
		</div>
	);
}

const mapStateToProps = (state, props) => {
	return {
		profile: state.profile.find((profile) => profile.id === props.match.params.id)
	}
};

export default connect(mapStateToProps)(ProfileEdit);