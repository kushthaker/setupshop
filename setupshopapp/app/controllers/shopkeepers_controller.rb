class ShopkeepersController < ApplicationController
  before_action :set_shopkeeper, only: [:show, :update, :destroy]

  # GET /shopkeepers
  # GET /shopkeepers.json
  def index
    @shopkeepers = Shopkeeper.all

    render json: @shopkeepers
  end

  # GET /shopkeepers/1
  # GET /shopkeepers/1.json
  def show
    render json: @shopkeeper
  end

  # POST /shopkeepers
  # POST /shopkeepers.json
  def create
    @shopkeeper = Shopkeeper.new(shopkeeper_params)

    if @shopkeeper.save
      render json: @shopkeeper, status: :created, location: @shopkeeper
    else
      render json: @shopkeeper.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shopkeepers/1
  # PATCH/PUT /shopkeepers/1.json
  def update
    @shopkeeper = Shopkeeper.find(params[:id])

    if @shopkeeper.update(shopkeeper_params)
      head :no_content
    else
      render json: @shopkeeper.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shopkeepers/1
  # DELETE /shopkeepers/1.json
  def destroy
    @shopkeeper.destroy

    head :no_content
  end

  private

    def set_shopkeeper
      @shopkeeper = Shopkeeper.find(params[:id])
    end

    def shopkeeper_params
      params.require(:shopkeeper).permit(:name, :phone, :user_id)
    end
end
