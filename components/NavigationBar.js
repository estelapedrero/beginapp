import React from 'react';

import ButtonNav from '../components/ButtonNav';

// NavigationBar compound by 3 ButtonNav Components
class NavigationBar extends React.Component {
	render(){
		return (
			<div>
				<ButtonNav path="/" value="home"/>
				<ButtonNav path="aboutme" value="about me"/>
				<ButtonNav path="design" value= "design"/>
			</div>
		);
	}
}

export default NavigationBar
