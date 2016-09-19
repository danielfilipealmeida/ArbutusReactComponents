import React from 'react';


var Slider        = require('./Slider').Slider;



class ControlsTable extends React.Component {

    constructor(props) {
		super(props);

        this.state = {
            controls: []
        }
    }

    addSlider(data) {
        const defaultData = {
            value:    1,
            maxValue: 1.0,
            mnValue:  0.0,
            title:    "Unnamed"
        };

    }

    render() {
        return (
            <div className='ControlsTable'>

            </div>
        )
    }
}

exports.ControlsTable = ControlsTable;