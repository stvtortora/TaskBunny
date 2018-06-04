days = Hash.new {|hash, key| hash[key] = []}

@time_slots.each do |time_slot|
  # slot = json.set! time_slot.id do
  #   json.id time_slot.id
  #   json.title time_slot.hour.title
  # end
  slot = {
    id: time_slot.id,
    title: time_slot.hour.title
  }
  days[time_slot.day.title] << slot
end

json.days days
