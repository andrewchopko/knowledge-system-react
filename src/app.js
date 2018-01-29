import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { startSetProjects } from './actions/projects';
import { startLogin, signUp } from './actions/user';
import { startSetProfiles } from './actions/profiles';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import WelcomePage from './components/WelcomePage';
import './styles/style.scss';

const store = configureStore();

//console.log(store.dispatch(signUp({ email: "andreychopko@gmail.com", password: "1234567", isManager: false })));
//console.log(store.dispatch(startLogin({ email: 'andreychopko@gmail.com', password: '1234567' })));


const jsx = (
	<Provider store={store}>
			<AppRouter />
	</Provider>
);

store.subscribe(() => {
	console.log(store.getState());
})

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetProjects()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
});

store.dispatch(startSetProfiles());