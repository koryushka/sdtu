class ImagesController < ApplicationController
  http_basic_authenticate_with :name => "koryushka", :password => "123456789", :only => [:destroy]

  def new
    @images = Image.order('created_at DESC')
    @image = Image.new(images_params)
  end


  def create
    @images = Image.order('created_at DESC')
    @image = Image.new(images_params)
    if @image.save
      redirect_to images_path, notice: "Upload successfull"
    else
      render "index"
      flash.now[:error] = "Ошибка загрузки"
 
    end

  end

  def index
    @images = Image.order('created_at DESC')
    @image = Image.new(images_params)
    @images.each do |image|
      @image_to_show = image
    end
  end


  def destroy
    @image = Image.find(params[:id])
    if @image.destroy
      redirect_to images_path
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def download
    @image = Image.find(params[:id])
    data = open(@image.picture.url)
    send_data data.read, filename: @image.picture.original_filename
    #send_file @image.picture.url,         :disposition => 'attachment'

  end


  private
  def images_params
    params.fetch(:image, {}).permit(:picture, :owner)
  end

end

# params.fetch(:image, {}).permit(:user_id, :picture)
