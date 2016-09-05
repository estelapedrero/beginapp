import React from 'react';

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

export default Slider