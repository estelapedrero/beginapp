import React from 'react';

import ButtonNav from '../components/ButtonNav';

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

export default NavigationBar
