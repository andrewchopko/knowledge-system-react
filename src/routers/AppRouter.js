import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreateProject from '../components/CreateProject';
import ProjectEdit from '../components/ProjectEdit';
import CreateProfile from '../components/CreateProfile';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Dashboard} exact={true} />
				<Route path="/project" component={CreateProject} exact={true}/>
				<Route path="/project/:id/edit" component={ProjectEdit} />
				<Route path="/profile" component={CreateProfile} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;