class AddContainerToGists < ActiveRecord::Migration
  def change
    add_reference :gists, :host, index: true, foreign_key: true
    add_column :gists, :container_id, :string
    add_column :gists, :container_port, :integer
  end
end
