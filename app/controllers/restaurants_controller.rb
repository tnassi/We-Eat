class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :update, :destroy]

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants
  end

  # GET /restaurants/1
  def show
    @restaurants = Restaurant.find(params[:id])
    render json: @restaurant
  end

  # POST /restaurants
  def create
    @restaurant = Restaurant.new(restaurant_params)

    did_creation_succeed = @restaurant.save

    if did_creation_succeed
      render json: @restaurant, status: :created, location: @restaurant, notice:'Restaurant was successfully created.'
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurants/1

  def update

    was_update_successful = @restaurant.update(restaurant_params)

    if was_update_successful
      render json: @restaurant, notice: 'Restaurant was successfully updated.'
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restaurants/1
  def destroy
    @restaurant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisine, :rating, :accepts_ten_bis, :address, :delivery_time)
  end
end
