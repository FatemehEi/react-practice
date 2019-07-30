import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import './App.css';
import '../components/Persons/Person/Person.css';


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
    let persons = null;
    if(this.state.show){
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeOnEvent}>
           </Persons>;
    }


    return (
      <StyleRoot>
        <div className="App">
          <Cockpit show={this.state.show}
          persons={this.state.persons}
          clicked={this.showPersonHandler}>
          </Cockpit>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);
