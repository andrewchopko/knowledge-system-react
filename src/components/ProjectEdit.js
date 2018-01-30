import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startEditProject } from '../actions/projects';

const ProjectEdit = (props) => {
	return (
		<div className="wrapper">
			<h2 className="project-page__title">Edit Project</h2>
			<ProjectForm
				project={props.project}
				onSubmit={(project) => {
					props.dispatch(startEditProject(props.project.id, project));
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