import React from 'react';

class Slider extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.title = props.title;
		this.value = props.value;
		this.minValue = props.minValue;
		this.maxValue = props.maxValue;
		this.color = props.color;
	}

	componentDidMount() {
        this.updateCanvas();
    }
    
	updateCanvas() {
		const ctx = this.refs.canvas.getContext('2d');
		ctx.fillStyle=this.color;

		// data handling needs to move!
		// todo: make a math lib. create a clamp function 
		if (this.value>this.maxValue) value = maxValue;
		if (this.value < this.minValue) value = minValue;

		const totalAmount = this.maxValue - this.minValue;
		const percentage = this.value / totalAmount;
	
        ctx.fillRect(0,0, this.refs.canvas.width * percentage, this.refs.canvas.height);
    }

	render() {
		return(
			<div className='UISlider'>
				<span>{this.title}</span>
				<canvas ref="canvas"></canvas>
				<input value={this.value} onChange={this.onChange} />
			</div>
		)
	}

	onChange (_val) {
		console.log(arguments);
	}
}

exports.Slider = Slider;