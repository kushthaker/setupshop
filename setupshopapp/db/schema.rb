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

ActiveRecord::Schema.define(version: 20150730035540) do

  create_table "orders", force: :cascade do |t|
    t.float    "total"
    t.boolean  "completed"
    t.integer  "shopper_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "orders", ["shopper_id"], name: "index_orders_on_shopper_id"

  create_table "orders_products", id: false, force: :cascade do |t|
    t.integer "orders_id"
    t.integer "products_id"
  end

  add_index "orders_products", ["orders_id"], name: "index_orders_products_on_orders_id"
  add_index "orders_products", ["products_id"], name: "index_orders_products_on_products_id"

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "image"
    t.float    "price"
    t.integer  "shop_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "products", ["shop_id"], name: "index_products_on_shop_id"

  create_table "shopkeepers", force: :cascade do |t|
    t.string   "name"
    t.string   "phone"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shopkeepers", ["user_id"], name: "index_shopkeepers_on_user_id"

  create_table "shoppers", force: :cascade do |t|
    t.string   "name"
    t.string   "phone"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shoppers", ["user_id"], name: "index_shoppers_on_user_id"

  create_table "shops", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "logo"
    t.integer  "shopkeeper_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "shops", ["shopkeeper_id"], name: "index_shops_on_shopkeeper_id"

  create_table "users", force: :cascade do |t|
    t.string   "provider",                            null: false
    t.string   "uid",                    default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true

end
