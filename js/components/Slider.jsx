import React from 'react';


/**
 * A React Component Class that implements a Slider used as a controller.
 */
class Slider extends React.Component {

	constructor(props) {
		super(props);
		this.title = props.title;
		this.minValue = props.minValue;
		this.maxValue = props.maxValue;
		this.color = props.color;

		this.state = {
			value: props.value,
			mouseDown: false
		}

		// manually bind this to the handlers
		this.onMouseDownCanvas = this.onMouseDownCanvas.bind(this);
		this.onMouseUpCanvas   = this.onMouseUpCanvas.bind(this);
		this.onMouseMoveCanvas = this.onMouseMoveCanvas.bind(this);
	}

	componentDidMount() {
        this.updateCanvas();
    }
    
	updateCanvas() {
		if (typeof this.refs.canvas === 'undefined') return;
		
		const ctx = this.refs.canvas.getContext('2d');
		var updatedValue = null;

		// clean
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0,0, this.refs.canvas.width, this.refs.canvas.height);
		
		// draw slider
		ctx.fillStyle = this.color;

		// data handling needs to move!
		// todo: make a math lib. create a clamp function 
		if (this.state.value > this.maxValue) updatedValue = this.maxValue;
		if (this.state.value < this.minValue) updatedValue = this.minValue;
		//if (updatedValue !== null) this.setState({value: updatedValue});

		const totalAmount = this.maxValue - this.minValue;
		const percentage  = this.state.value / totalAmount;
	
        ctx.fillRect(0,0, this.refs.canvas.width * percentage, this.refs.canvas.height);
    }


	render() {
		this.updateCanvas();
		return(
			<div className='UISlider'>
				<span>{this.title}</span>
				<canvas 
					ref     = "canvas" 
					value   = {this.state.value}
					onMouseDown = {this.onMouseDownCanvas}
					onMouseUp   = {this.onMouseUpCanvas}
					onMouseLeave = {this.onMouseUpCanvas}
					onMouseMove = {this.onMouseMoveCanvas}
				></canvas>
				<input value={this.state.value} onChange={this.onChange} />
			</div>
		)
	}

	onMouseDownCanvas (_mouseEvent) {
		this.setState({mouseDown: true});
		this.handleNewMouseEvent(_mouseEvent);
	}

	onMouseUpCanvas (_mouseEvent) {
		if (this.state.mouseDown === true) {
			this.handleNewMouseEvent(_mouseEvent);
		}
		this.setState({mouseDown: false});
	}

	onMouseMoveCanvas (_mouseEvent) {
		if (this.state.mouseDown === true) {
			this.handleNewMouseEvent(_mouseEvent);
		}
	}

		/**
		 * Takes care of the handling of a mouse event on top of the canvas.
		 * Calculate the value defined by the user after clicking/dragging/leaving the canvas, updates
		 * the state and forces the update.
		 * 
		 * @param _mouseEvent a synthetic mouse event from react
		 */
	handleNewMouseEvent (_mouseEvent) {
		const canvas           = _mouseEvent.target;
		const canvasWidth      = canvas.clientWidth;
		const positionInCanvas = _mouseEvent.pageX - canvas.offsetLeft;
		const percentage       = positionInCanvas / canvasWidth;
		const currentValue     = (this.maxValue - this.minValue) * percentage;
		this.setState({value: currentValue});
		this.forceUpdate();
	}



	onChange (_val) {
		console.log(arguments);
	}
}

exports.Slider = Slider;