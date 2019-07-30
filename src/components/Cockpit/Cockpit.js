import React from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    
    const style = {
        backgroundColor: '#7CE48C',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '8px',
        cursor: 'pointer',
        color: 'white',
        ':hover': {
          backgroundColor: 'lightgreen',
          color : 'black'
        }
    };
    if (props.show) {
        style.backgroundColor = '#EE485B';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color : 'black'
        }
    }

    const classes = [];
    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <=1){
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hello!</h1>
            <p className={classes.join(' ')}>Click on button</p>
            <button style={style}
            onClick = {props.clicked}>Toggle persons!</button>
        </div>
    );
};

export default Radium(cockpit);