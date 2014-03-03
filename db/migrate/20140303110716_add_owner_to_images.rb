class AddOwnerToImages < ActiveRecord::Migration
  def change
    add_column :images, :owner, :string
  end
end
