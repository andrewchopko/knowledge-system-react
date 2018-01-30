import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startEditProfile } from '../actions/profiles';

const ProfileEdit = (props) => {
	return (
		<div className="wrapper">
			<h2 className="page__title">Edit Profile</h2>
			<ProfileForm
				profile={props.profile}
				onSubmit={(profile) => {
					props.dispatch(startEditProfile(props.profile.id, profile));
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