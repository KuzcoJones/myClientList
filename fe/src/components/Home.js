import React from 'react'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    goSignUp = () => {
        this.props.history.push('/signup')
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
                    this.props.isTherapistApp(data)
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
    render(){
        
        return(
            <div>
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

export default Home;