class ShopsController < ApplicationController
  before_action :set_shop, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  
  # GET /shops
  # GET /shops.json
  def index
    @shops = Shop.all

    render json: @shops
  end

  # GET /shops/1
  # GET /shops/1.json
  def show
    render json: @shop
  end

  # POST /shops
  # POST /shops.json
  def create
    @shop = Shop.new(shop_params)
    @shopkeeper = Shopkeeper.where(user_id: current_user.id).take!
    @shop.shopkeeper_id = @shopkeeper.id

    if @shop.save
      render json: @shop, status: :created, location: @shop
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shops/1
  # PATCH/PUT /shops/1.json
  def update
    @shop = Shop.find(params[:id])

    if @shop.update(shop_params)
      head :no_content
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shops/1
  # DELETE /shops/1.json
  def destroy
    @shop.destroy

    head :no_content
  end

  private

    def set_shop
      @shop = Shop.find(params[:id])
    end

    def shop_params
      params.require(:shop).permit(:name, :description, :logo)
    end
end
