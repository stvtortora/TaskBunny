class TasksController < ApplicationController
  def create
    @task = Task.new(task_params)

    unless @task.save
      render json: @task.errors.full_messages, status: 422
    end
  end

  def task_params
    params.require(:task_info).permit(:location_id, :cateogry_id, :tasker_id, :user_id, :time, :date)
  end
end
