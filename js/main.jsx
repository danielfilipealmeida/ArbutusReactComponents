var React       = require("react"),
    ReactDom    = require("react-dom");


var Slider      = require('./components/Slider').Slider;


import { render } from 'react-dom';





var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Arbutus Components</h1>
                <Slider title="Alpha" minValue="0.0" maxValue="1.0" value="0.5" color="#888888" />
            </div>
        );
    }
});

console.log(Slider);

ReactDom.render(
    <div>
        <App />
    </div>
    , document.getElementById('mainContainer')
);


