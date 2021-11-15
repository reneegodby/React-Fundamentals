//Here are a few important things to know about props:

// not the same as state
// Props can pass from parent component to child component strings, objects, arrays, functions, and even JSX. 
// are immutable
// are properties, a way to configure a component
// can think of them as parameters to a function

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const PropsDemo = () => {
    const [color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');
//These state values are storing style properties that will show up within our parent class component

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    //we're using an ES6 arrow function to build out our method, and we're using a ternary operator to check what the current value is, and setting it accordingly. We can now toggle the color property of our div's style between pink or white. We pass this function down to the child in the FunctionalComponent to call it. 

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('#191970') : setBackgroundColor('purple');
    }

    const toggleBorderRadius = () => {
        borderRadius ==='5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>                                                    
                <FunctionalComponent string='Color Toggle' function={toggleColor} selectedStyle={color}/>
                <FunctionalComponent string='Background Color Toggle' function={toggleBackgroundColor} selectedStyle={backgroundColor}/>
                <FunctionalComponent string='Border Radius Toggle' function={toggleBorderRadius} selectedStyle={borderRadius}/>
                <FunctionalComponent string='Border Style Toggle' function={toggleBorderStyle} selectedStyle={borderStyle}/>
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    //functions can accept multiple props in the parameters. Props are what you feed the function to do the thing
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    );
};
//When working with props, it's best to start where the data originates, then pass it down to whichever component we need it to be in. 
const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style: {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
};

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};
