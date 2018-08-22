class Api::VehicleRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = VehicleRegistration.find_by(vehicle_id: params[:id])
    @registration.destroy
    render 'api/registrations/show'
  end
end
