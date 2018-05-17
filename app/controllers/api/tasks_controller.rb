class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)
    debugger
    if @task.save
      debugger
      render json: {}
    else
      debugger
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = Task
                .select(:time, :date)
                .includes(:category, :location, :tasker, :user)
                .where(users: {id: current_user.id})

    render 'api/tasks/index'
  end

  def task_params
    params.require(:task_info).permit(:location_id, :category_id, :tasker_id, :time, :date)
  end
end
