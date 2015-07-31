class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    render json: @order
  end

  # POST /orders
  # POST /orders.json
  def create

    # hash = params
    # hash = JSON.parse(hash) if hash.is_a?(String)
    # @order = Order.new(hash)

    @order = Order.new

    @order.shopper_id = current_user.shopper.id
    @order.completed = false

    products = params["_json"]
    sum_of_prices = 0

    products_in_order = []

    products.each do |product|
      product = Product.find(product["id"])
      sum_of_prices += product.price
      products_in_order << product
    end
    
    @order.products << products_in_order

    @order.total = sum_of_prices

    logger.debug("\n\n\n\n")
    logger.debug(@order.total)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    @order = Order.find(params[:id])

    if @order.update(order_params)
      head :no_content
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy

    head :no_content
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:total, :completed)
  end
end
