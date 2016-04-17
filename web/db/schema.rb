# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160417120432) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "containers", force: :cascade do |t|
    t.string   "cid"
    t.integer  "port"
    t.string   "state"
    t.integer  "host_id"
    t.integer  "user_id"
    t.integer  "gist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "containers", ["gist_id"], name: "index_containers_on_gist_id", using: :btree
  add_index "containers", ["host_id"], name: "index_containers_on_host_id", using: :btree
  add_index "containers", ["user_id"], name: "index_containers_on_user_id", using: :btree

  create_table "gists", force: :cascade do |t|
    t.string   "name"
    t.text     "content"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "uid"
  end

  add_index "gists", ["uid"], name: "index_gists_on_uid", unique: true, using: :btree
  add_index "gists", ["user_id"], name: "index_gists_on_user_id", using: :btree

  create_table "hosts", force: :cascade do |t|
    t.string   "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "containers", "gists"
  add_foreign_key "containers", "hosts"
  add_foreign_key "containers", "users"
  add_foreign_key "gists", "users"
end
