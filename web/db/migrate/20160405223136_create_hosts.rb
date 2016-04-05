class CreateHosts < ActiveRecord::Migration
  def change
    create_table :hosts do |t|
      t.string :address

      t.timestamps null: false
    end
  end
end
