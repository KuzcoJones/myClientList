import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'
import TherapistSU from './components/TherapistSU'
import ClientSU from './components/ClientSU'
import Profile from './components/Profile'
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }


  isTherapistApp = (data) => {
    this.setState({
        isTherapist: data.isTherapist
    })
  }
  // Step one update state to show isTherapist
    // Write a method to recieve data from Home.
    // And update state of app 
    // Then pass it to Profile. 

  // Step two conditionally render the Therapist Profile or the Client Profile associated with that user. 
  // Might can conditionally render shit in the NavBar also. 

  render(){
    console.log(this.state)
    return(
      <div>
        <Router>
          <NavBar/>
          <Route exact path='/' render={ (props) => <Home {...props} isTherapistApp={this.isTherapistApp}/> }/>

          <Route exact path='/signup' component={Signup}/>

          <Route exact path='/signup/therapist' component={TherapistSU} /> 
          
          <Route exact path='/signup/client' component={ClientSU} /> 

          <Route exact path='/profile' render={ (props) => <Profile {...props} isTherapist={this.state.isTherapist}/>} />

        </Router>
      </div>
    )
  }  
}

export default App;
