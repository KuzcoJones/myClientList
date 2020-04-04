import React from 'react'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
    
        }
    }


    componentDidMount(){
       if(this.props.profileState.profileData.isTherapist){
        //    fetch from therapist 
            const token = localStorage.getItem('token')
            const therapistObj = {
                method: 'GET', 
                headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
                }
            }
            fetch(`http://localhost:3000/therapists/${this.props.profileState.profileData.therapist_id}`, therapistObj)
            .then(resp => resp.json())
            .then(data => console.log(data))
        //  set state to data from fetch
       }
       else {
        //    fetch from client
        // set state to data from fetch
       }
    }



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
               <h1>Hello</h1>     
            </div>
        )
    }
}

export default Profile