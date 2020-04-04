class ClientsController < ApplicationController
    def index
        clients  = Client.all
        render json: clients.to_json(
            only: [:id, :hobbies, :occupation, :bio],
            include: [user: {only: [:username, :full_name, :isTherapist]}, followers: {only: [:client_id, :therapist_id]}]
        )
    end

    def create
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']

        user = User.find(user_id)

        client = Client.create(:user[user], client_params)

        render json: clients.to_json(
            only: [:id, :hobbies, :occupation, :bio],
            include: [user: {only: [:username, :full_name, :isTherapist]}, followers: {only: [:client_id, :therapist_id]}]
        )
    end

    def show
        client = Client.find(params['id'])
        render json: client.to_json(
            only: [:id, :hobbies, :occupation, :bio],
            include: [user: {only: [:id, :username, :full_name, :isTherapist]}, followers: {only: [:client_id, :therapist_id]}]
        )
    end

    def update 
        client = Client.find(params[:id])
        client.update(client_params)
        # render message of success of editing.
        render json: client.to_json(only: [:id, :hobbies, :occupation, :bio])
    end

    private 
    def client_params
        params.require(:client).permit(:bio, :occupation, :hobbies)
    end


end
