class FollowersController < ApplicationController
    def index 
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})
        user_id = decoded_token[0]['user_id']
        user = User.find(user_id)

        if user.isTherapist 
            therapist = Therapist.find_by(user: user)            
            followers = Follower.select{|follow| follow.therapist_id === therapist.id}

                render json: {followers: followers}
        else
            client = Client.find_by(user: user)
            followers = Follower.select{|follow| follow.therapist_id === therapist.id}
            render json: {followers: followers}
        end

       
    end 

    def create
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']

        user = User.find(user_id)

        if user.isTherapist 
            therapist = Therapist.find_by(user: user)
            follower = Follower.create!(therapist: therapist, client: params['client'])
        else
            client = Client.find_by(user:user)
            follower = Follower.create!(therapist: params['therapist'], client: client)
        end

        

        
    end
end
