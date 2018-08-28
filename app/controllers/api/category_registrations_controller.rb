class Api::CategoryRegistrationsController < Api::RegistrationsController
  def destroy
    @registration = CategoryRegistration.find(params[:id])
    @registration.destroy
    render 'api/registrations/show'
  end
end
