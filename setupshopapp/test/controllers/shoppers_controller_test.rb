require 'test_helper'

class ShoppersControllerTest < ActionController::TestCase
  setup do
    @shopper = shoppers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shoppers)
  end

  test "should create shopper" do
    assert_difference('Shopper.count') do
      post :create, shopper: { name: @shopper.name, phone: @shopper.phone, user_id: @shopper.user_id }
    end

    assert_response 201
  end

  test "should show shopper" do
    get :show, id: @shopper
    assert_response :success
  end

  test "should update shopper" do
    put :update, id: @shopper, shopper: { name: @shopper.name, phone: @shopper.phone, user_id: @shopper.user_id }
    assert_response 204
  end

  test "should destroy shopper" do
    assert_difference('Shopper.count', -1) do
      delete :destroy, id: @shopper
    end

    assert_response 204
  end
end
