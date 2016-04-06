class GistsController < ApplicationController
  def index
    @gists = current_user.gists.all
  end

  def show
    @gist = current_user.gists.find(params[:id])
  end

  def new
    @gist = current_user.gists.new
  end

  def edit
    @gist = current_user.gists.find(params[:id])
  end

  def create
    @gist = current_user.gists.new(gist_params)

    if @gist.save
      redirect_to @gist, notice: 'Gist was successfully created.'
    else
      render :new
    end
  end

  def update
    @gist = current_user.gists.find(params[:id])
    if @gist.update(gist_params)
      redirect_to @gist, notice: 'Gist was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    gist = current_user.gists.find(params[:id])
    gist.destroy
    redirect_to gists_url, notice: 'Gist was successfully destroyed.'
  end

  def start
    gist = current_user.gists.find(params[:id])
    container = StartGistContainer.new.call(gist, current_user)

    redirect_to container
  end

  private

  def gist_params
    params.require(:gist).permit(:name, :content)
  end
end
