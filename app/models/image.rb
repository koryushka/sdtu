require 'uri'

class Image < ActiveRecord::Base
#added for paperclip-drop gem 
has_attached_file :picture,
 :storage => :dropbox,
 :dropbox_credentials => Rails.root.join("config/dropbox_config.yml"),
  :dropbox_visibility => 'public',
 :styles => { :medium => "300x300>" , :thumb => "150x150>", :small=>"50>x50>"},    
 :dropbox_options => {      
   :path => proc { |style| URI.encode("#{style}/#{id}.jpg")},       :unique_filename => true   
  }
 

validates :picture, :attachment_presence => true 

#validates :tags, :presence =>true     
#validates :category, :presence => true    
#belongs_to :user


end
