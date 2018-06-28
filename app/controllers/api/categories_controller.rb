class Api::CategoriesController <ApplicationController
  def index
    if(params[:searchQuery])
      searchQuery = params[:searchQuery]
      matcher = "%#{searchQuery.split(//).join('%')}%"

      @categories = Category.where('title ilike ?', matcher)
      render 'api/categories/index'
    else
      @categories = Category.where(title: [
          'Mounting & Installation',
          'Moving & Packing',
          'Furniture Assembly',
          'Home Improvement',
          'General Handyman',
          'Heavy Lifting'
        ])

      render 'api/categories/index'
    end
  end
end
