categories = {}

@tasker.categories.each do |category|
  categories[category.id] = {
    title: category.title,
  }
end

category_registrations = {}

@tasker.category_registrations.each do |registration|
  category_registrations[registration.id] = {
    title: categories[registration.category_id][:title],
    id: registration.id
    }
end

sizes = {}

@tasker.sizes.each do |size|
  sizes[size.id] = {
    title: size.title,
    id: size.id
  }
end

vehicles = {}

@tasker.vehicles.each do |vehicle|
  vehicles[vehicle.id] = {
    id: vehicle.id
  }
end

time_slots = {}

@tasker.time_slots.each do |time_slot|
  time_slots[time_slot.id] = {
    id: time_slot.id
  }
end

json.categories category_registrations
json.sizes sizes
json.vehicles vehicles
json.timeSlots time_slots
json.location @tasker.location
json.description @tasker.description
json.name @tasker.name
