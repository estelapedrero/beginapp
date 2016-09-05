import React from 'react';

class ButtonNav extends React.Component {

	render(){
		let section = this.props.section
		return <button>{section}</button>
	}
}

export default ButtonNav