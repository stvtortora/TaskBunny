@attributes.each do |attribute|
  json.set! attribute.id do
    json.extract! attribute, :id, :title
  end
end
