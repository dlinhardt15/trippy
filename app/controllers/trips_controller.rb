class TripsController < ApplicationController

    def index
        trips = @current_user.trips.all
        render json: trips
    end
end
