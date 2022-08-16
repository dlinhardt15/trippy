class MethodTasksController < ApplicationController

    def show
        task = MethodTask.find_by(id: params[:id])
        render json: task
    end

    def update
        task = MethodTask.find_by(id: params[:id])
        task.update!(complete: params[:complete])
        render json: task, status: :accepted
    end

end
