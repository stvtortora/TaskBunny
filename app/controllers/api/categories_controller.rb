class Api::CategoriesController <ApplicationController
  def index
    searchQuery = params[:searchQuery]
    matcher = "%#{searchQuery.split(//).join('%')}%"

    @categories = Category.where('title ilike ?', matcher)
    render 'api/categories/index'
  end

  def category_params
    params.require(:searchQuery)
  end
end
