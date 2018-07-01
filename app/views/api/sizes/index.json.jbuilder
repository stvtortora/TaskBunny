@sizes.each do |size|
  json.set! size.id do
    json.extract! size, :id, :title
  end
end
