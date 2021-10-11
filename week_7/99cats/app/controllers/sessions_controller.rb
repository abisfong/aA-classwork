class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user.is_password?(params[:password])
      session[:session_token] = user.reset_session_token!
    end
    redirect_to cats_url
  end

  def destroy
    user = User.find_by(session_token: session[:session_token])
    user.reset_session_token!
    session[:session_token] = nil
    # @current_user = nil
  end
end
