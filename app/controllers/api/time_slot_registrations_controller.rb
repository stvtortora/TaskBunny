class Api::TimeSlotRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = TimeSlotRegistration.find_by(time_slot_id: params[:id], tasker_id: current_user.id)
    @registration.destroy
    render 'api/registrations/show'
  end
end
