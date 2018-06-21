class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      if @user.is_a? Client
        render "api/users/show"
      else
        render "ap/users/taskers/show"
      end
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {status: 404}
    end
  end

end
