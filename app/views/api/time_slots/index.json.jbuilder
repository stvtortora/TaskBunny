days = Hash.new {|hash, key| hash[key] = []}

@time_slots.each do |time_slot|
  slot = {
    id: time_slot.id,
    title: time_slot.hour.title
  }
  days[time_slot.day.title] << slot
end

json.days days
