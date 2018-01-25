import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello from React!!</h1>
				<h3>Its from class!!</h3>
			</div>
		);
	}
}

const tpl = <h1>Hello from React!!!</h1>;

ReactDOM.render(<Hello />, document.getElementById('app'));