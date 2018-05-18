class Api::TaskersController <ApplicationController
  def index
    @taskers = Tasker
                    .joins(:categories)
                    .joins(:sizes)
                    .joins(:vehicles)
                    .where('categories.id = ?', params[:task_info][:category][:id])
                    .where('taskers.location_id = ?', params[:task_info][:location][:id])
                    .where('sizes.title ilike ?', params[:task_info][:size])
                    .where('vehicles.title ilike ?', params[:task_info][:vehicle])

    render 'api/taskers/index'
  end
end
