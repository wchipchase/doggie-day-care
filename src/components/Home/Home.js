import React from 'react';
import myDogs from '../../helpers/data/dogs';
import DogPen from '../DogPen/DogPen';
import myEmployees from '../../helpers/data/employees';
import StaffRoom from '../StaffRoom/StaffRoom';
import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }
  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees});
  }

  render() {
    const {dogs} = this.state;
    const {employees} = this.state;
      return (
        <div className='Home'>
          <div><h1>Doggie Day Care</h1></div>
          <DogPen dogs={dogs}/>
          <div><h2>Staff Room</h2></div>
          <StaffRoom employees={employees} />
        </div>
    );
  }
}

export default Home;