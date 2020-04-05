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

  profileInfo = (data) => {
    this.setState({
      ...this.state, profileData: data
    })
    
  }

  handleLogin = (event) => {
    event.preventDefault()

    const reqObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/login', reqObj)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        // recieve data back from login user 
        // set token to local storage
        // redirect to the user profile with that data 
        
        if(data.error){
            alert(data.error)}
            else{
                
                localStorage.setItem('token', data.token)
                {this.props.profileInfo(data)}
                this.props.history.push('/profile')
            }
        }
    )
}

handleInputChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value
    })
}


  // Step two conditionally render the Therapist Profile or the Client Profile associated with that user. 
  // Might can conditionally render shit in the NavBar also. 

  render(){
    // console.log(this.state)
    return(
      <div>
        <Router>
          <NavBar/>
          <Route exact path='/' render={ (props) => <Home {...props} profileInfo={this.profileInfo}/> }/>

          <Route exact path='/signup' component={Signup}/>

          <Route exact path='/signup/therapist' render={ (props) => <TherapistSU {...props} profileInfo={this.profileInfo} />} /> 
          
          <Route exact path='/signup/client' component={ClientSU} /> 

          <Route exact path='/profile' render={ (props) => <Profile {...props} profileState = {this.state}/>} />
        </Router>

        <div>
                    <h1>Welcome to Your Client List</h1>
                    <button onClick={this.goSignUp}>Signup</button>
                    
                    <h2>About Your Client List</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni obcaecati quasi autem tempora optio praesentium voluptatem odit vero sit.</p>
                    </div>
                </div>

                <div>
                    <form onSubmit={(event) => this.handleLogin(event)} action="" method="get">
                        <div>
                        <input type="text" placeholder="Username" name='username' onChange={ (event) => {this.handleInputChange(event)}}></input>

                        </div>
                        <div>
                        <input type="password" name="password" onChange={ (event) => {this.handleInputChange(event)}}id="" placeholder="password"/>
                        </div>
                        <input type="submit" value="login"/>
                    </form>
                </div>
      </div>
    )
  }  
}

export default App;
