class Api::TimeSlotsController < ApplicationController
  def index
    if current_user.is_a? Client
    @time_slots = TimeSlot.includes(:hour, :day)
                          .joins(:time_slot_registrations)
                          .where('time_slot_registrations.filled = ?', false)
                          .where('time_slot_registrations.tasker_id = ?', params[:tasker_id])
    else
      @time_slots = TimeSlot.all
    end

    render 'api/time_slots/index'
  end
end
