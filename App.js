import React from 'react';
import ReactDOM from 'react-dom';

// Main Page Content
class App extends React.Component {
	render(){
		return (
			<div>
				<NavigationBar />
				<WelcomeHeader  txt='hello' />
				<Content />
				<Signature />
			</div>
			);
	}
}

// NavigationBar compound by 3 ButtonNav Components
class NavigationBar extends React.Component {
	render(){
		return (
			<div>
				<ButtonNav section="home"/>
				<ButtonNav section="aboutme"/>
				<ButtonNav section="design"/>
			</div>
		);
	}
}
class ButtonNav extends React.Component {
	render(){
		let section = this.props.section
		return <button>{section}</button>
	}
}

// Header has an input to change the welcome name
class WelcomeHeader extends React.Component {
	constructor(){
		super();
		this.state = { txt: 'welcome to my first React experiment',
									 name: 'you'}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({name: e.target.value})
	}
	render(){
		let welcometxt = this.props.txt
		let name = this.state.name
		let txt = this.state.txt
		return (
			<div>
				<h1>{welcometxt} {name}</h1>
				<input type="text"
					onChange={this.update}/>
				<p>{txt}</p>				
			</div>

		);
	}
}
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'hello world'
}

// Content component: 3 Slider comps with ref and state
// one button with onClick event to update count value
class Content extends React.Component {
	constructor(){
		super();
		this.state = {
			red:0,
			green:0,
			blue:0
		}
		this.update = this.update.bind(this)

	}
	update(e){
		this.setState({
			red:ReactDOM.findDOMNode(this.refs.red).value,
			green:ReactDOM.findDOMNode(this.refs.green).value,
			blue:ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render(){
		return(
			<div>
				<p>Choose your fav color</p>

				<p>{this.state.red}</p>
				<Slider ref="red" update = {this.update}/>

				<p>{this.state.green}</p>		
				<Slider ref="green" update = {this.update}/>

				<p>{this.state.blue}</p>
				<Slider ref="blue" update = {this.update}/>

				<Wrapper />
			</div>
		);
	}
}

class Slider extends React.Component {
	render(){
		return (
			<input type="range"
				min="0"
				max="255"
				onChange= {this.props.update}/>
		);
	}
}

// Button to check Mount and Unmount on React
class ButtonCount extends React.Component{
	constructor(){
		super();
		this.state = { val: 0};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({val: this.state.val +1})
	}
	componentWillMount(){
		console.log('mounting')
	}
	render(){
		console.log('rendering')
		return (
			<div>
				<button onClick={this.update}>{this.props.children} - {this.state.val}</button>
			</div>
		)
	}
	componentDidMount(){
		console.log('mounted')
		this.inc = setInterval(this.update, 500)
	}
	componentWillUnmount(){
		console.log('bye!')
		clearInterval(this.inc)
	}
}

class Wrapper extends React.Component{
	constructor(){
		super();
	}
	mount(){
		ReactDOM.render(<ButtonCount>hola</ButtonCount>, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render(){
		return(
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		);
	}
}
// Stateless component
const Signature = () => <p>estelapedrero</p>

// Render all <App /> in div#app in index.html
ReactDOM.render(
	<App cat={1} />,
	document.getElementById('app')
);