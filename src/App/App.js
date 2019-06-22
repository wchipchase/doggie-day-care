import React from 'react';
import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';
import myEmployees from './employees';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
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
        <div><h1>Doggie Day Care</h1></div>
        <DogPen dogs={dogs}/>
        <div><h2>Staff Room</h2></div>
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default App;
