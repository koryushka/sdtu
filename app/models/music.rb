require 'uri'
class Music < ActiveRecord::Base
	has_attached_file :song,
 :storage => :dropbox,
 :dropbox_credentials => Rails.root.join("config/dropbox_config.yml"),
  :dropbox_visibility => 'public',   
 :dropbox_options => {      
   :path => proc { |style| URI.encode("local/music/#{id}_#{song.original_filename}")},  
   :unique_filename => true   
  }
 

validates :song, :attachment_presence => true 

#validates :tags, :presence =>true     
#validates :category, :presence => true    
#belongs_to :user

end
