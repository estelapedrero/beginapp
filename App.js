import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Container from './components/Container';
import Signature from './components/Signature';

// Main Page Content
class App extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<NavigationBar />
				<Header/>
				<Container />
				<Signature />
			</div>
			);
	}
}

/*
				<ButtonMixed txt="Button"/>
				<LabelMixed txt="mouse over me!"/>

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'hello world'
}
*/
/*
const Button = (props) => <button onClick={props.update}>
								{props.txt} - {props.val}
						  </button>

const Label = (props) => <label onMouseOver={props.update}>
							{props.txt} - {props.val}
						 </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)
*/

export default App

/*
ReactDOM.render(
	<App />,
	document.getElementById('app')
);
*/
