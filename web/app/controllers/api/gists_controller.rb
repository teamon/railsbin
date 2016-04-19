module Api
  class GistsController < ApplicationController
    before_action :authenticate_user!

    rescue_from ActiveRecord::RecordNotFound do |ex|
      head 404
    end

    def index
      gists = current_user.gists #.recent
      render json: GistRepresenter.render_many(gists)
    end

    def show
      gist = Gist.find(params[:id])
      render json: GistRepresenter.render(gist)
    end

    def create
      gist = CreateGist.call(current_user, params[:gist])
      GistRepresenter.render(gist)
    end

    def update
      gist = current_user.gists.find(params[:id])
      gist = UpdateGist.
      # @gist = current_user.gists.find(params[:id])
      # if @gist.update(gist_params)
      #   redirect_to @gist, notice: 'Gist was successfully updated.'
      # else
      #   render :edit
      # end
    end

    def destroy
      # gist = current_user.gists.find(params[:id])
      # gist.destroy
      # redirect_to gists_url, notice: 'Gist was successfully destroyed.'
    end

    # def start
    #   gist = current_user.gists.find(params[:id])
    #   container = StartGistContainer.new.call(gist, current_user)

    #   redirect_to container
    # end

    private

    def gist_params
      params.require(:gist).permit(:name, :content)
    end
  end
end
