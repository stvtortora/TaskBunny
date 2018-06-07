@taskers.each do |tasker|
  json.set! tasker.id do
    json.extract! tasker, :id, :name, :description, :rate
    json.image_url asset_path(tasker.image.url)
  end
end
