class Api::LocationsController <ApplicationController
  def index
    searchQuery = params[:searchQuery]
    matcher = "%#{searchQuery.split(//).join('%')}%"

    @locations = Location.where('title ilike ?', matcher)

    render 'api/locations/index'
  end

  def category_params
    params.require(:searchQuery)
  end
end
