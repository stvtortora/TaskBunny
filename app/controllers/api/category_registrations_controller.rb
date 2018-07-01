class Api::CategoryRegistrationsController < ApplicationController
  def create
    @registration = CategoryRegistration.new(registration_params)

    if @registration.save
      render 'api/category_registrations/show'
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def registration_params
    params.require(:info).permit(:tasker_id, :category_id)
  end
end
