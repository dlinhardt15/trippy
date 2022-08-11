class TasksController < ApplicationController

    def index
        tasks = @current_user.tasks.all
        render json: tasks
    end

    def create
        trip = Trip.find(params[:trip_id])
        task = trip.tasks.create!(task_params)
        render json: task, status: :created
    end

    def update
        task = Task.find_by(id: params[:id])
        task.update!(complete: params[:complete])
        render json: task, status: :accepted
    end

    private

    def task_params
        params.permit(:name, :description, :due_date, :trip_id, :complete)
    end
end
