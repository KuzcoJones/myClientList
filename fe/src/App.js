import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
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


  profileInfo = (data) => {
    this.setState({
        profileInfo: data
    })
  }


  




  // Step two conditionally render the Therapist Profile or the Client Profile associated with that user. 
  // Might can conditionally render shit in the NavBar also. 

  render(){
    return(
      <div>
        <Router>
            <NavBar/>
            <Route exact path='/' render= { (props) => <Login {...props} profileInfo= {this.profileInfo}/>}  />
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signup/therapist' render={ (props) => <TherapistSU {...props} profileInfo={this.profileInfo} />} /> 
            <Route exact path='/signup/client' component={ClientSU} /> 
            <Route exact path='/home' render={ (props) => <Profile {...props} profileState = {this.state}/>} />
        </Router>
      </div>
    )
  }  
}

export default App;
