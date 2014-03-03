class RemoveAlbumFromMusics < ActiveRecord::Migration
  def change
    remove_column :musics, :album, :string
  end
end
