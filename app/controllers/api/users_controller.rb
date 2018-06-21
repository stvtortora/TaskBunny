class Api::UsersController < ApplicationController
  def create
    @user = class_name.new(user_params)

    if @user.save
      login(@user)
      if @user.is_a? Client
        render "api/users/show"
      else
        render "ap/users/taskers/show"
      end
    else
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

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :name)
  end

  def class_name
    params[:type].constantize
  end

  def task_info
    params[:task_info]
  end
end
