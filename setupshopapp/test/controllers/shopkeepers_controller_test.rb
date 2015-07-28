require 'test_helper'

class ShopkeepersControllerTest < ActionController::TestCase
  setup do
    @shopkeeper = shopkeepers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shopkeepers)
  end

  test "should create shopkeeper" do
    assert_difference('Shopkeeper.count') do
      post :create, shopkeeper: { name: @shopkeeper.name, phone: @shopkeeper.phone, user_id: @shopkeeper.user_id }
    end

    assert_response 201
  end

  test "should show shopkeeper" do
    get :show, id: @shopkeeper
    assert_response :success
  end

  test "should update shopkeeper" do
    put :update, id: @shopkeeper, shopkeeper: { name: @shopkeeper.name, phone: @shopkeeper.phone, user_id: @shopkeeper.user_id }
    assert_response 204
  end

  test "should destroy shopkeeper" do
    assert_difference('Shopkeeper.count', -1) do
      delete :destroy, id: @shopkeeper
    end

    assert_response 204
  end
end
