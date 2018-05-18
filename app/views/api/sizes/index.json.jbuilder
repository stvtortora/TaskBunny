@sizes.each do |size|
  json.set! size.title do
    json.extract! size, :id, :title
  end
end
