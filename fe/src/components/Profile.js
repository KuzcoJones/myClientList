import React from 'react'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            therapist: [],
            followers: []
        }
    }
    
    
    // ToDo List
    // componenent did mount use to fetch followers and and list of all the clients. 
    // make form to make new followers select or dropdown
    // fetch list of all clients
    // Bootstrap everything
    
    componentDidMount(){
        const { therapist } = this.props.profileState.profileData

        // console.log(profileData.therapist.id)

        fetch(`http://localhost:3000/therapists/${therapist.id}`)
        .then( resp => resp.json() )
        .then( data => this.setState({
                ...this.state, therapist: data
            }) 
        )
    }
    
    
    
    
    
    
    
    
    render(){
        
        console.log(this.state)
        return(
            <div>
                <div className="profile-info" >
                    {/* <h1>hello {profileData.user.full_name} from {profileData.location} </h1>   
                    <h2>{profileData.services}</h2>  
                    <h3>{profileData.specialties}</h3> */}
                </div>

                <div id="newsfeed-timeline" >
                {/* map through list of followers and  */}
                    <ul>
                        {/* list of posts from list of all followers */}
                    </ul>
                </div>

                <div id="create-post-form" >
                    {/* create a post fetch method onClick */}
                    <form action="">
                        <input type="text" name="posts" id=""/>
                    </form>
                </div>

                <div className="client-search">
                        {/* fetch to update list */}
                    <form action="" method="get">
                        <input type="text" name="client-search" id=""/>
                    </form>

                    <div id="client-finder">
                        <ul id="client-list">
                            {/*map through list that doesn't match an id on the followers list  */}
                            {/* list every client in data with button to make a follower*/}
                        </ul>

                    </div>

                </div>



            </div>
        )
    }
}

export default Profile