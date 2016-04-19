class DropContainers < ActiveRecord::Migration
  def change
    drop_table :containers do |t|
      t.string :cid
      t.integer :port
      t.string :state
      t.references :host, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.references :gist, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
