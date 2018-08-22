class Api::SizeRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = SizeRegistration.find_by(size_id: params[:id])
    @registration.destroy
    render 'api/registrations/show'
  end
end
