class AddUidToGists < ActiveRecord::Migration
  def change
    add_column :gists, :uid, :string
    add_index :gists, :uid, unique: true
  end
end
