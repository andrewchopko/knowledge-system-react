import React from 'react';
import { connect } from 'react-redux';
import ProjectsListItem from './ProjectsListItem';

const ProjectsList = (props) => (
	<div className="wrapper projects-list">
		<h2>All Projects</h2>
		{props.projects.map((project) => {
			return <ProjectsListItem key={project.id} { ...project } />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	};
};

export default connect(mapStateToProps)(ProjectsList);
