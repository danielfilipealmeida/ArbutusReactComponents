import React from 'react';

class Slider extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.title = props.title;
		this.value = props.value;
	}

	render() {
		return(
			<div className='slider'>
				<span>{this.title}</span>
				<input value={this.value} />
			</div>
		)
	}
}

exports.Slider = Slider;