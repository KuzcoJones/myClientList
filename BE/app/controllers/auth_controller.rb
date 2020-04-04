class AuthController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        
        payload = { user_id: user.id, isTherapist: user.isTherapist }
        
        token = JWT.encode(payload, 'secret', 'HS256')
        # byebug
        
        
        if user && user.authenticate(params[:password])
            if user.isTherapist 
                therapist = Therapist.find_by(user: user)
            render json: { id: user.id, isTherapist: user.isTherapist, username: user.username, therapist_id: therapist.id, token: token}

            else
                client = Client.find_by(user: user)
            render json: { id: user.id, isTherapist: user.isTherapist, username: user.username, client_id: client.id, token: token}
            
            end
            

            else 
                render json: {error: 'Invalid Credtials'}, status: 401
            end
        end
    
    def show 
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']
        isTherapist = decoded_token[1]['isTherapist']

        user = User.find(user_id)

        if user 
            render json: { id: user.id, username: user.username, token: token}
        else
            render json: {error: 'Invalid Token'}, status: 401
        end
    end


end