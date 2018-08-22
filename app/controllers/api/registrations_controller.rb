class Api::RegistrationsController < ApplicationController
  def create
    @registration = class_name.new(registration_params)
    @registration.tasker_id = current_user.id

    if @registration.save
      render 'api/registrations/show'
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  # def destroy
  #   @registration = class_name.find_by(params[:id])
  #   @registration.destroy
  #   render 'api/registrations/show'
  # end

  private

  # def attribute_name
  #   if registration_params.time_slot_id
  #     'time_slot'
  #   elsif registration_params.size_id
  #     'size'
  #   elsif registration_params.category_id
  #     'category'
  #   elsif registration_params.vehicle_id
  #     'vehicle'
  #   end
  # end

  # def find_registration
  #   class_name.find_by("#{attribute_name} = ?", )
  # end

  # def registration_class
  #   "#{params[:type]}Registration".constantize
  # end

  # def find_registration
  #   class_name.find_by(params[:id])
  # end

  def registration_params
    params.require(:info).permit(:time_slot_id, :size_id, :category_id, :vehicle_id)
  end
end
