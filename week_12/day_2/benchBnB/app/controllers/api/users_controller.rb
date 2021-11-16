class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
    else
      # Tell the user that something went wrong. Let them try again.
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    # params.require(:user).permit(:username, :email)
    # Add password
    params.require(:user).permit(:username, :email, :password)
  end
end
