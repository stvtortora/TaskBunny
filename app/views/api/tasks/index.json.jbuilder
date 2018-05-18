@tasks.each do |task|
  json.set! task.id do
    json.tasker task.tasker.name
    json.userId task.user.id
    json.category task.category.title
    json.location task.location.title
    json.date task.date
    json.time task.time
  end
end
