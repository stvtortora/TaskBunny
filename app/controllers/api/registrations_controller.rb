class Api::RegistrationsController < ApplicationController
  def create
    @registration = class_name.new(registration_params)
    @registration.tasker_id = current_user.id

    if @registration.save
      render 'api/registrations/show'
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def registration_params
    params.require(:info).permit(:time_slot_id, :size_id, :category_id, :vehicle_id)
  end
end
