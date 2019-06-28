import React from 'react';
import firebase from 'firebase/app';
// import myDogs from '../helpers/data/dogs';
// import DogPen from '../components/DogPen/DogPen';
// import myEmployees from '../helpers/data/employees';
// import StaffRoom from '../components/StaffRoom/StaffRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import fbConnection from '../helpers/data/connections';


fbConnection();
class App extends React.Component {
  state = {
    authed : false,
  }

componentDidMount () {
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({authed: true})
    } else {
      this.setState({authed: false})
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (this.state.authed) {
        return <Home />
      }
      return <Auth />
    };

    return (
      <div className='App'>
        <MyNavbar authed={ authed } />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
