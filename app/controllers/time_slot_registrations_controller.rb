class TimeSlotRegistrationsController < ApplicationController
  def update
    @time_slot_registration = TimeSlotRegistration.find(params[:id])
    # @time_slot_registration.update({time: params[:time]})
    @time_slot_registration.update(time_slot_registration_params)
  end


  # def time_slot_registration_params
  #   params.require(:time_slot_registration).permit(...)
  # end


end
