class AddSongToMusic < ActiveRecord::Migration
  def self.up
    add_attachment :musics, :song
  end

  def self.down
    remove_attachment :musics, :song
  end
end
