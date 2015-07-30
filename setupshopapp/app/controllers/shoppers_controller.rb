class ShoppersController < ApplicationController
  before_action :set_shopper, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /shoppers
  # GET /shoppers.json
  def index
    @shoppers = Shopper.all

    render json: @shoppers
  end

  # GET /shoppers/1
  # GET /shoppers/1.json
  def show
    render json: @shopper
  end

  # POST /shoppers
  # POST /shoppers.json
  def create
    @shopper = Shopper.new(shopper_params)
    @shopper.user_id = current_user.id

    if @shopper.save
      render json: @shopper, status: :created, location: @shopper
    else
      render json: @shopper.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shoppers/1
  # PATCH/PUT /shoppers/1.json
  def update
    @shopper = Shopper.find(params[:id])

    if @shopper.update(shopper_params)
      head :no_content
    else
      render json: @shopper.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shoppers/1
  # DELETE /shoppers/1.json
  def destroy
    @shopper.destroy

    head :no_content
  end

  private

    def set_shopper
      @shopper = Shopper.find(params[:id])
    end

    def shopper_params
      params.require(:shopper).permit(:name, :phone)
    end
end
