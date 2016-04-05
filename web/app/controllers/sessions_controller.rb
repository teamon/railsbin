class SessionsController < ApplicationController
  def create
    user = User.find_or_create_with_omniauth(auth_hash)
    sign_in_as(user)

    redirect_to root_path
  end

  def destroy
    reset_session

    redirect_to root_path
  end

  protected

  def auth_hash
    request.env["omniauth.auth"]
  end
end
