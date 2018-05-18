@vehicles.each do |vehicle|
  json.set! vehicle.title do
    json.extract! vehicle, :id, :title
  end
end
