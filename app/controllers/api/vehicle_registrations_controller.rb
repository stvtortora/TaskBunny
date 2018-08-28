class Api::VehicleRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = VehicleRegistration.find_by(vehicle_id: params[:id], tasker_id: current_user.id)
    @registration.destroy
    render 'api/registrations/show'
  end
end
