import React from 'react';

// Higher Order components
let Mixin = InnerComponent => class extends React.Component {
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
		return <InnerComponent
			update={this.update}
			{...this.state}
			{...this.props}/>
	}
	componentDidMount(){
		console.log('mounted')
		// this.inc = setInterval(this.update, 500)
	}
	componentWillUnmount(){
		console.log('bye!')
		// clearInterval(this.inc)
	}
}


export default Mixin