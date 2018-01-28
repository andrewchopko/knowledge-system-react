import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateProfile from '../components/CreateProfile';
import NotFoundPage from '../components/NotFoundPage';
import ProfileEdit from '../components/ProfileEdit';
import ShowProfile from '../components/ShowProfile';
import CreateProject from '../components/CreateProject';
import ProjectEdit from '../components/ProjectEdit';
import Header from '../components/Header';
import ShowProject from '../components/ShowProject';
import Projects from '../components/Dashboard';
import WelcomePage from '../components/WelcomePage';
import Forward from '../components/Forward';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/projects" component={Projects} exact={true} />
				<Route path="/profile" component={CreateProfile} exact={true} /> 
				<Route path="/profile/:id/edit" component={ProfileEdit} /> 
				<Route path="/profile/:id" component={ShowProfile} />
				<Route path="/project" component={CreateProject} exact={true} />
				<Route path="/project/:id/edit" component={ProjectEdit} />
				<Route path="/project/:id" component={ShowProject} />
				<Route path="/" component={WelcomePage} exact={true} />
				<Route path="/forward" component={Forward} exact={true} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>

);

export default AppRouter;