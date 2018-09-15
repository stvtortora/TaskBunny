class Api::LocationsController <ApplicationController
  def index
    if params[:searchQuery]
      searchQuery = params[:searchQuery]
      matcher = "%#{searchQuery.split(//).join('%')}%"

      @locations = Location.where('title ilike ?', matcher)
    else
      @locations = Location.all
    end
      render 'api/locations/index'
  end
end


#
# def category_params
#   params.require(:searchQuery)
# end
