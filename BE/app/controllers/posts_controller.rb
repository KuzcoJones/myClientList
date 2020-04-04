class PostsController < ApplicationController
    def index 
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']
        posts = Post.find_by(user_id: user_id)
    end

    def create 
        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']

        user = User.find(user_id)

        post = Post.create(user:user, post_params)
    end

    def update
        post = Post.find(params['id'])
        post.update(post_params)
    end

    def destroy 
        post = Post.find(params[id])
        post.destroy
    end

    private 
    def post_params
        params.require(:post).permit(:body)
    end

end
