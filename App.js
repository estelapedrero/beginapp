import React from 'react';

import NavigationBar from './components/NavigationBar';
import Header from './components/Header';

// Main Page Content
class App extends React.Component {
	render(){
		return (
			<div>
				<Header/>
				<NavigationBar />
				{this.props.children}
			</div>
			);
	}
}

export default App