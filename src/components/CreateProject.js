import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { addProject } from '../actions/projects';


const CreateProject = (props) => (
	<div>
		<h2>Create Project</h2>
		<ProjectForm 
			onSubmit={(project) => {
				props.dispatch(addProject(project));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(CreateProject);