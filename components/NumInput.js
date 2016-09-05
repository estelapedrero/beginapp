import React from 'react';

class NumInput extends React.Component {
	render(){
		let label = this.props.label !== '' ?
		<label>{this.props.label} - {this.props.value}</label> : ''
		return(
			<div>
				<input
					type={this.props.type}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					defaultValue={this.props.value}
					onChange={this.props.changeVal} />
					{label}
			</div>
		);
	}
}

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	value: React.PropTypes.number,
	label: React.PropTypes.string,
	changeVal: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	value: 0,
	label: '',
	type: 'range'
}

export default NumInput