import React from 'react'



class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            therapist: [],
            followers: [],
            post_body: '',
            posts: []
        }
    }
    
    
    // ToDo List
    // componenent did mount use to fetch followers and and list of all the clients. 
    // make form to make new followers select or dropdown
    // fetch list of all clients
    // Bootstrap everything
    
    componentDidMount(){
        const token = localStorage.getItem('token')
        const { therapist } = this.props.profileState.profileInfo

        const reqObj = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            
        }
        

        fetch(`http://localhost:3000/therapists/${therapist.id}`)
        .then( resp => resp.json() )
        .then( data => this.setState({
                ...this.state, therapist: data
            }),

        fetch(`http://localhost:3000/posts`, reqObj)
        .then(resp => resp.json())
        .then(data => this.setState({
            ...this.state, posts: data
        })),

        fetch(`http://localhost:3000/clients`, reqObj)
        .then(resp => resp.json())
        .then( data => this.setState({
            ...this.state, clients: data
        })),

        fetch(`http://localhost:3000/followers`, reqObj)
        .then(resp => resp.json())
        .then( data => this.setState({
            ...this.state, followers: data
        }))

        )
    }

    followersList = () => {

    }

    createPost = (e) => {
        e.preventDefault()
        e.target.reset()
        const token = localStorage.getItem('token')
        // const newTherapistObj = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${token}`},
        //     body: JSON.stringify(this.state)
        // }
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/posts', reqObj)
        .then(resp => resp.json())
        .then(data => console.log('======= create post fetch',data))
    }

    postBody = (event) => {
        this.setState({
            ...this.state, post_body: event.target.value
        })
    }
    
    
    
    
    
    
    
    
    render(){
        
        console.log(this.state)
        return(
                
            <div>
                 <div>  
                     <div>
                         <ul>
                             
                         </ul>
                     </div>

                 <div className="profile-info" >
                     {/* <h1>hello {profileInfo.user.full_name} from {profileInfo.location} </h1>   
                     <h2>{profileInfo.services}</h2>  
                 <h3>{profileInfo.specialties}</h3> */}
                 </div>

                 <div id="newsfeed-timeline" >
                 {/* map through list of followers and  */}
                     <ul>
                         {/* list of posts from list of all followers */}
                     </ul>
                 </div>

                 <div id="create-post-form" >
                     {/* create a post fetch method onClick */}
                     <form onSubmit= {(event) => this.createPost(event)} action="">
                        <label htmlFor="posts">Create a Post</label>
                         <input onChange = {(event) => this.postBody(event)} type="text" name="posts" id=""/>
                         <input type="submit" value="post"/>
                     </form>
                 </div>

                 <div className="client-search">
                         {/* fetch to update list */}
                     <form action="" method="get">
                         <input type="text" name="client-search" id=""/>
                         {/* search scroll box for client list */}
                     </form>

                     <div id="client-finder">
                         <ul id="client-list">
                             {/*map through list that doesn't match an id on the followers list  */}
                             {/* list every client in data with button to make a follower*/}
                         </ul>

                     </div>

                 </div>


             </div>

            </div>
        )
    }
}

export default Profile