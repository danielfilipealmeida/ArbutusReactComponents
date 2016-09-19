var React       = require("react"),
    ReactDom    = require("react-dom");
import { render } from 'react-dom';


var Slider        = require('./components/Slider').Slider;
var ControlsTable = require('./components/ControlsTable').ControlsTable;

class App extends React.Component {

    constructor(props) {
		super(props);
    }
    
    render () {
        return (
           <div>
                <h1>Arbutus Components</h1>
                <Slider title="Alpha" minValue="0.0" maxValue="1.0" value="0.5" color="#888888" />
                <Slider title="Width" minValue="-2.0" maxValue="0.0" value="1" color="#00ffff" />
                <ControlsTable></ControlsTable>
            </div>
        )
    }
}


ReactDom.render(
    <div>
        <App />
    </div>
    , document.getElementById('mainContainer')
);


