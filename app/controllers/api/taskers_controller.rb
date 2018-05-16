class Api::TaskersController <ApplicationController
  def index
    debugger
    @taskers = Tasker.joins(:categories).joins(:sizes).joins(:vehicles).where('categories.id = ?', taskers_params[:category_id]).where('taskers.location_id = ?', taskers_params[:location_id]).where('sizes.title ilike ?', taskers_params[:size]).where('vehicles.title ilike ?', taskers_params[:vehicle])
    # debugger
    render 'api/taskers/index'
  end

  def taskers_params
    params.require(:task_info).permit(:category_id, :location_id, :size, :vehicle, :details)
  end
end
