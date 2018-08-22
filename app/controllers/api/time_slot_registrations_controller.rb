class Api::TimeSlotRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = TimeSlotRegistration.find_by(time_slot_id: params[:id])
    @registration.destroy
    render 'api/registrations/show'
  end
end
