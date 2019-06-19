import React from 'react';
import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';
import myEmployees from './employees';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import './App.css';

class App extends React.Component {
  state = {
    dogs: [],
    employess: [],
  }
  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees});
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
      <div className='App'>
        <div>Doggie Day Care</div>
        <DogPen dogs={dogs}/>
        <div>Staff Room</div>
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default App;
