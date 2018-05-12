class Api::LocationsController <ApplicationController
  def index
    @locations = Location.all
    render 'api/locations/index'
  end
end
