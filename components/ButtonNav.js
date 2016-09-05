import React from 'react';
import { Link } from 'react-router';

class ButtonNav extends React.Component {

	render(){
		return <Link to={this.props.path}><button>{this.props.value}</button></Link>
	}
}

export default ButtonNav