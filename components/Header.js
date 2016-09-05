import React from 'react';

// Header has an input to change the welcome name
class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			title: 'Hello',
			txt: 'welcome to my first React experiment',
			name: 'you!'
		}
		this.changeName = this.changeName.bind(this)
	}
	changeName(e){
		this.setState({name: e.target.value})
	}
	render(){
		let welcometxt = this.state.title
		let name = this.state.name
		let txt = this.state.txt
		return (
			<div>
				<h1>{welcometxt} {name}</h1>
				<input type="text"
					onChange={this.changeName}/>
				<p>{txt}</p>				
			</div>
		);
	}
}

export default Header