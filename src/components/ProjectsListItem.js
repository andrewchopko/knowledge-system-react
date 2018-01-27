import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject } from '../actions/projects';

const ProjectsListItem = ({dispatch, id, description, note, skills }) => (
	<div>
		<Link to={`/project/${id}/edit`}><h5>{description}</h5></Link>
		<p>{note}</p>
		<div>{skills.join(' ')}</div>
		<button onClick={() => {
			dispatch(removeProject({ id }));
		}}>Remove Project </button>
	</div>
);

export default connect()(ProjectsListItem);