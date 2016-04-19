class GistsController < ApplicationController
  def index
    @dashboard = GistsDashboard.call(current_user)
  end

  def show
    gist = Gist.find_by!(uid: params[:uid])
    @gist_data = GistRepresenter.render(gist)

    render :show
  end

  def new
    @gist_data = GistRepresenter.render_new

    render :show
  end

  def edit
    @gist = Gist.find(params[:uid])
  end

  # API
  def create
    gist = CreateGist.call(current_user, gist_params)
    render json: GistRepresenter.render(gist)
  end

  # API
  def update
    gist = UpdateGist.call(current_user, params[:uid], gist_params)
    render json: GistRepresenter.render(gist)
  end

  def destroy
    DeleteGist.call(current_user, params[:uid])
    redirect_to gists_url, notice: 'Gist was successfully destroyed.'
  end

  def start
    gist = current_user.gists.find(params[:uid])
    container = StartGistContainer.new.call(gist, current_user)

    redirect_to container
  end

  private

  def gist_params
    params.require(:gist).permit(:name, :content).symbolize_keys
  end
end
