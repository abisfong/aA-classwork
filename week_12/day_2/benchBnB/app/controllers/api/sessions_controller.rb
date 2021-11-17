class Api::SessionsController < ApplicationController
  
  def destroy
    if !current_user
      flash.now[:errors] = ["invalid user credentials"]
      render 404
      #public folder 404.html
    end
    logout(current_user)
    render {}
  end

  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
      flash.now[:errors] = ['Invalid username or password.']
      render :new
    else
    # Log them in and redirect them if we find them
      login!(@user)
    end

  end
end
