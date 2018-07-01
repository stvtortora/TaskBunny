class Api::SizesController < ApplicationController
  def index
    @sizes = Size.all

    render "api/sizes/index"
  end
end
