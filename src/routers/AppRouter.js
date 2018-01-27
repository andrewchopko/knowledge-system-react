import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreateProject from '../components/CreateProject';
import ProjectEdit from '../components/ProjectEdit';
import CreateProfile from '../components/CreateProfile';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ShowProject from '../components/ShowProject';
import ProfileEdit from '../components/ProfileEdit';
import ShowProfile from '../components/ShowProfile';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Dashboard} exact={true} />
				<Route path="/project" component={CreateProject} exact={true} />
				<Route path="/project/:id/edit" component={ProjectEdit} />
				<Route path="/project/:id" component={ShowProject} />    //Add show project page - done
				<Route path="/profile" component={CreateProfile} exact={true} /> //done
				<Route path="/profile/:id/edit" component={ProfileEdit} /> //Add edit profile page - done
				<Route path="/profile/:id" component={ShowProfile} /> //Add show profile page - done
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;