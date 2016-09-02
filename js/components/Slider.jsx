import React from 'react';

class Slider extends React.Component {
	render() {
		console.log(props);
		return(
			<div className='slider'>
				<span>{props.title}</span>
				<input value='{props.value}' />
			</div>
		)
	}
}

exports = Slider;