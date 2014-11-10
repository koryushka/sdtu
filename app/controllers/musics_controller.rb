class MusicsController < ApplicationController
  http_basic_authenticate_with :name => "koryushka", :password => "123456789", :only => [:destroy]

  def new
    @music = Music.new(musics_params)
  end

  def create
    @music = Music.new(musics_params)
    @musics = Music.all
    if @music.save
      redirect_to musics_path
      flash[:success] = "Композиция загружена"
    else
      render 'index'
      flash.now[:error] = "Ошибка"
    end
  end

  def index
    @music = Music.new(musics_params)
    @musics = Music.all
  end

  def destroy
    @music = Music.find(params[:id])
    if @music.destroy
      redirect_to musics_path
    end
  end

  def download
    @music = Music.find(params[:id])
    data = open(@music.song.url)
    send_data data.read, filename: @music.song.original_filename
    #send_file @image.picture.url,         :disposition => 'attachment'

  end


  private

  def musics_params
    params.fetch(:music, {}).permit(:song)
  end
end
