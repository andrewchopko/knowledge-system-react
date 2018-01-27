import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { addProfile } from '../actions/profiles';


const CreateProfile = (props) => (
	<div>
		<h2>Create Profile</h2>
		<ProfileForm 
			onSubmit={(profile) => {
				props.dispatch(addProfile(profile));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(CreateProfile);