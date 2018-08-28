if @registration.is_a? TimeSlotRegistration
  json.time_slot_id @registration.time_slot_id
elsif @registration.is_a? SizeRegistration
  json.size_id @registration.size_id
elsif @registration.is_a? VehicleRegistration
  json.vehicle_id @registration.vehicle_id
else
  json.title @registration.category.title
  json.id @registration.id
end
