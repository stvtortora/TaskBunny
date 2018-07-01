class Api::TimeSlotRegistrationsController < ApplicationController
  def create
    @registration = TimeSlotRegistration.new(registration_params)

    if @registration.save
      render 'api/time_slot_registrations/show'
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def registration_params
    params.require(:info).permit(:tasker_id, :time_slot_id)
  end
end
