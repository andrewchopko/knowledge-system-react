import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startAddProfile } from '../actions/profiles';


const CreateProfile = (props) => (
	<div>
		<h2>Create Profile</h2>
		<ProfileForm
			userId = {props.user.id} 
			onSubmit={(profile) => {
				props.dispatch(startAddProfile(profile));
				props.history.push('/');
			}}
		/>
	</div>
);

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(CreateProfile);