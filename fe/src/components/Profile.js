import React from 'react'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
    
        }
    }
// ToDo List
// componenent did mount use to fetch followers and and list of all the clients. 
// make form to make new followers select or dropdown
// fetch list of all clients
// Bootstrap everything

    // componentDidMount(){
    //    if(this.props.profileState.profileData.isTherapist){
    //     //    fetch from therapist 
    //         const token = localStorage.getItem('token')
    //         const therapistObj = {
    //             method: 'GET', 
    //             headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //             }
    //         }
    //         fetch(`http://localhost:3000/therapists/${this.props.profileState.profileData.therapist_id}`, therapistObj)
    //         .then(resp => resp.json())
    //         .then(data => this.setState({
    //             profile: data
    //         }))
    //     //  set state to data from fetch
    //    }
    //    else {
    //     //    fetch from client
    //     // set state to data from fetch
    //    }
    // }



    // const therapistObj = {
    //     method: 'POST', 
    //     headers: {
    //     'Authorization': `Bearer ${token}`,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   }
    //     fetch('http://localhost:3000/therapist', therapistObj)
    //     .then( resp => resp.json())
    //     .then( data => console.log("======fetch",data))
    // }








    render(){
        console.log(this.props.profileState.profileData)
        return(
            <div>

               <h1>hello {this.props.profileState.profileData.user.full_name} from {this.props.profileState.profileData.location} </h1>   
               <h2>{this.props.profileState.profileData.services}</h2>  
               <h3>{this.props.profileState.profileData.specialties}</h3>
            </div>
        )
    }
}

export default Profile