import React from 'react';
import ReactDOM from 'react-dom';

import Slider from '../components/Slider';
import Mixin from '../components/Mixin';
import NumInput from '../components/NumInput';
import Wrapper from '../components/Wrapper';


// Container component: 3 Slider comps with ref and state
// one button with onClick event to update count value
class Container extends React.Component {
	constructor(){
		super();
		this.state = {
			red: 0,
			blue: 0,
			green: 0,
			limit:0,
			size: 36
		}
		this.update = this.update.bind(this)
		this.changeLimit = this.changeLimit.bind(this)
		this.changeSize = this.changeSize.bind(this)
	}
	update(e){
		this.setState({
			red:ReactDOM.findDOMNode(this.refs.red).value,
			green:ReactDOM.findDOMNode(this.refs.green).value,
			blue:ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	changeLimit(e){
		this.setState({
			limit:e.target.value
		})
	}
	changeSize(e){
		this.setState({
			size:e.target.value
		})
	}
	render(){
		return(
			<div>
				<p>Choose your fav color</p>

				<p>{this.state.red}</p>
				<Slider ref="red" update = {this.update}/>

				<p>{this.state.green}</p>		
				<Slider ref="green" update = {this.update}/>

				<p>{this.state.blue}</p>
				<Slider ref="blue" update = {this.update}/>
				<br/>

				<p>Choose $ limit</p>
				<NumInput
					min={0}
					max={100}
					step={5}
					value={+this.state.limit}
					label="LIMIT"
					changeVal={this.changeLimit}/>

				<p>Choose size</p>
				<NumInput
					type="number"
					min={0}
					max={44}
					step={1}
					value={+this.state.size}
					label="Size"
					changeVal={this.changeSize}/>

				<ButtonMixed txt="Button"/>
				<br/>
				<LabelMixed txt="mouse over me!"/>

				<Wrapper />
			</div>
		);
	}
}
const Button = (props) => <button onClick={props.update}>
								{props.txt} - {props.val}
						  </button>

const Label = (props) => <label onMouseOver={props.update}>
							{props.txt} - {props.val}
						 </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

export default Container