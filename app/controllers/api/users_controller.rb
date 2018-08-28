class Api::UsersController < ApplicationController
  def create
    @user = class_name.new(user_params)
    puts 'in create method'
    puts @user
    if @user.save
      login(@user)
      
      render "api/users/show"
    else
      puts 'error'
      puts @user
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @taskers = Tasker
                    .joins(:categories)
                    .joins(:sizes)
                    .joins(:vehicles)
                    .joins(:time_slot_registrations)
                    .where('time_slot_registrations.filled = ?', false)
                    .where('categories.id = ?', task_info[:category][:id])
                    .where('users.location_id = ?', task_info[:location][:id])
                    .where('sizes.title ilike ?', task_info[:size])
                    .where('vehicles.title ilike ?', task_info[:vehicle])

    render 'api/users/taskers/index'
  end

  def show
    @tasker = Tasker
                  .includes(:categories, :sizes, :vehicles, :time_slots)
                  .where("users.id = ?", params[:id])
                  .first

    render 'api/users/taskers/show'
  end

  def update
    @tasker = Tasker.find(params[:id])

    if @tasker.update_attributes(user_params)
      render 'api/users/taskers/show'
    else
      render json: @tasker.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :location_id, :name, :rate, :description, :image)
  end

  # def class_name
  #   params[:type].constantize
  # end

  def task_info
    params[:task_info]
  end
end
