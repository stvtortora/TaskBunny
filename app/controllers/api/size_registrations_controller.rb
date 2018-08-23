class Api::SizeRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = SizeRegistration.find_by(size_id: params[:id], tasker_id: current_user.id)
    @registration.destroy
    render 'api/registrations/show'
  end
end
