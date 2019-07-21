import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id:'fat1234', name: 'Fatemeh', age:21},
      {id:'Im1234', name: 'Iman', age:21},
      {id:'za123', name:'Zahra', age:8}
    ],
    show : false
  }

  changeOnEvent = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  showPersonHandler = () => {
    const temp = this.state.show;
    this.setState({show : !temp});
  }
  
  render () {
    
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
    
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }


    let persons = null;
    if(this.state.show){
      persons = (
        <div>
         {this.state.persons.map((person, index) => {
           return <Person
           name={person.name}
           age={person.age}
           click={() => this.deletePersonHandler(index)}
           key = {person.id}
           changed={(event) => this.changeOnEvent(event, person.id)}>
           </Person>
         })}
        </div>
      );
      style.backgroundColor = '#EE485B';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color : 'black'
      }
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello!</h1>
          <p className={classes.join(' ')}>Click on button</p>
          <button style={style} onClick = {this.showPersonHandler}>Toggle persons!</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);
