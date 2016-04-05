class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected

  def current_user
    @current_user ||= find_current_user
  end

  def user_signed_in?
    !!current_user
  end

  def sign_in_as(user)
    # delete instance variable cache just in case
    @current_user = nil

    # save used id in session
    session[:current_user_id] = user.id
  end

  helper_method :current_user
  helper_method :user_signed_in?

  def find_current_user
    if user_id = session[:current_user_id]
      User.find_by(id: user_id)
    else
      nil
    end
  end
end
