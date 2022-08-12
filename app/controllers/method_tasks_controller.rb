class MethodTasksController < ApplicationController

    def update
        task = MethodTask.find_by(id: params[:id])
        task.update!(complete: params[:complete])
        render json: task, status: :accepted
    end

end
