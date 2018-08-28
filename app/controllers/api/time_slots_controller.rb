class Api::TimeSlotsController < ApplicationController
  def index
    @time_slots = TimeSlot.includes(:hour, :day)
     .joins(:time_slot_registrations)
     .where('time_slot_registrations.filled = ?', false)
     .where('time_slot_registrations.tasker_id = ?', params[:tasker_id])

    render 'api/time_slots/index'
  end
end


# if current_user.is_a? Client
#   puts 'tasker time slots being rendered'
#   @time_slots = TimeSlot.includes(:hour, :day)
#   .joins(:time_slot_registrations)
#   .where('time_slot_registrations.filled = ?', false)
#   .where('time_slot_registrations.tasker_id = ?', params[:tasker_id])
# else
#   puts 'all time slots being rendered'
#   @time_slots = TimeSlot.all
# end
