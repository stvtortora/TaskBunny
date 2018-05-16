@taskers.each do |tasker|
  json.set! tasker.id do
    json.extract! tasker, :id, :name, :description, :rate
  end
end
