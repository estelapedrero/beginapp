import React from 'react';
import ReactDOM from 'react-dom';

import ButtonCount from '../components/ButtonCount';

class Wrapper extends React.Component{
	constructor(){
		super();
		this.mount = this.mount.bind(this)
		this.unmount = this.unmount.bind(this)
	}
	mount(){
		ReactDOM.render(<ButtonCount>Click on me!</ButtonCount>, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render(){
		return(
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button>
				<div id="a"></div>
			</div>
		);
	}
}

export default Wrapper