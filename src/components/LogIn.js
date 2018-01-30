import React from 'react';

export default class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			error: ""
		};
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	}

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.email && !this.state.password){
			this.setState(() => ({ error: "Please provide e-mail and password"}));
		} else {
			this.setState(() => ({ error: ""}));
			this.props.onSubmit({
				email: this.state.email,
				password: this.state.password
			});
		}
	}

	render() {

		return (
			<div>
				<h2 className="login-form__title">Authentification</h2>
				{this.state.error && <p className="error-notification">{this.state.error}</p>}
				<form className="login-form" onSubmit={this.onSubmit}>
					<div>
						<input className="login-form__item"
							type="text"
							placeholder="E-mail"
							autoFocus
							value={this.state.email}
							onChange={this.onEmailChange}
						/>
					</div>
					<div>
						<input className="login-form__item"
							type="text"
							placeholder="Password"
							value={this.state.password}
							onChange={this.onPasswordChange}
						/>
					</div>
					<div>
						<button className="login-form__button">Log In</button>
					</div>
				</form>
			</div>
		);
	}
};