class TimeSlotsController < ApplicationController
  def index
    @all_timeslots = TimeSlot
                        .select('date')
                        .group('time_slots.date')

    @tasker_timeslots = TimeSlot
                          .joins(:taskers)



  end

  def time_slots_params

  end
end
