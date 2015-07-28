require 'test_helper'

class ShopsControllerTest < ActionController::TestCase
  setup do
    @shop = shops(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shops)
  end

  test "should create shop" do
    assert_difference('Shop.count') do
      post :create, shop: { description: @shop.description, logo: @shop.logo, name: @shop.name, shopowner_id: @shop.shopowner_id }
    end

    assert_response 201
  end

  test "should show shop" do
    get :show, id: @shop
    assert_response :success
  end

  test "should update shop" do
    put :update, id: @shop, shop: { description: @shop.description, logo: @shop.logo, name: @shop.name, shopowner_id: @shop.shopowner_id }
    assert_response 204
  end

  test "should destroy shop" do
    assert_difference('Shop.count', -1) do
      delete :destroy, id: @shop
    end

    assert_response 204
  end
end
