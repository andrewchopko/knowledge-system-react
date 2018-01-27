import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addProject, editProject, removeProject } from './actions/projects';

const store = configureStore();

store.dispatch(addProject({
	description: 'New Project',
	note: 'Some notes that required for project',
	skills: ["react", "redux", "nodejs", "mongodb"]
}));

store.dispatch(addProject({
	description: 'New Second Project',
	note: 'Some notes that required for project',
	skills: ["react", "redux", "nodejs", "mongodb"]
}));

store.dispatch(addProject({
	description: 'New Third Project',
	note: 'Some notes that required for project',
	skills: ["react", "redux", "nodejs", "mongodb"]
}));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));