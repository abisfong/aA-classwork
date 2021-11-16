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
end
