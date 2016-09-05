import React from 'react';

// Button to check Mount and Unmount on React
class ButtonCount extends React.Component{
	constructor(){
		super();
		this.state = {val: 0}
		this.addCount = this.addCount.bind(this)
	}
	addCount(e){
		this.setState({val: this.state.val+1})
	}
	render(){
		console.log('rendering')
		return (
			<div>
				<button onClick={this.addCount}>
					{this.props.children} - {this.state.val}
				</button>
			</div>
		)
	}
}

export default ButtonCount