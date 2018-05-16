days = Hash.new {|hash, key| hash[key] = []}

@time_slots.each do |time_slot|
  days[time_slot.day.title] << time_slot.hour.title
end

json.days days
