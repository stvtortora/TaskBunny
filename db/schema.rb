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

ActiveRecord::Schema.define(version: 20180516024915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "title", null: false
  end

  create_table "category_registrations", force: :cascade do |t|
    t.integer "tasker_id", null: false
    t.integer "category_id", null: false
    t.index ["category_id"], name: "index_category_registrations_on_category_id"
    t.index ["tasker_id"], name: "index_category_registrations_on_tasker_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "title", null: false
  end

  create_table "size_registrations", force: :cascade do |t|
    t.integer "tasker_id", null: false
    t.integer "size_id", null: false
    t.index ["size_id"], name: "index_size_registrations_on_size_id"
    t.index ["tasker_id"], name: "index_size_registrations_on_tasker_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.string "title", null: false
  end

  create_table "taskers", force: :cascade do |t|
    t.text "name", null: false
    t.integer "location_id", null: false
    t.string "description"
    t.string "rate", null: false
  end

  create_table "time_slot_registrations", force: :cascade do |t|
    t.integer "tasker_id", null: false
    t.integer "time_slot_id", null: false
  end

  create_table "time_slots", force: :cascade do |t|
    t.string "date", null: false
    t.string "time", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token"
  end

  create_table "vehicle_registrations", force: :cascade do |t|
    t.integer "tasker_id", null: false
    t.integer "vehicle_id", null: false
    t.index ["tasker_id"], name: "index_vehicle_registrations_on_tasker_id"
    t.index ["vehicle_id"], name: "index_vehicle_registrations_on_vehicle_id"
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "title", null: false
  end

end
