class TimeSlotsController < ApplicationController
  def index
    @time_slots = TimeSlot.includes(:hour, :day)
                          .joins(:time_slot_registrations)
                          .where('time_slot_registrations.tasker_id = ?', params[:tasker_id])

    render 'api/time_slots/index'
  end
end
