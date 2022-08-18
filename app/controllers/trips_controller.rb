class TripsController < ApplicationController

    def index
        trips = @current_user.trips.all
        render json: trips
    end

    def create
        trip = @current_user.trips.create!(trip_params)
        render json: trip, status: :created
    end

    def destroy
        trip = Trip.find(params[:id])
        trip.destroy
        head :no_content
    end

    private

    def trip_params
        params.permit(:name, :departure_date, :travel_method_id)
    end
end
