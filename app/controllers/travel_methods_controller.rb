class TravelMethodsController < ApplicationController

    def index
        render json: TravelMethod.all
    end
end
