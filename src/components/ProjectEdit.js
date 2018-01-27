import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { editProject } from '../actions/projects';

const ProjectEdit = (props) => {
	return (
		<div>
			<h2>Edit Project</h2>
			<ProjectForm
				project={props.project}
				onSubmit={(project) => {
					props.dispatch(editProject(props.project.id, project));
					props.history.push('/');
				}}
			/>
		</div>
	);
}

const mapStateToProps = (state, props) => {
	return {
		project: state.projects.find((project) => project.id === props.match.params.id)
	}
};

export default connect(mapStateToProps)(ProjectEdit);