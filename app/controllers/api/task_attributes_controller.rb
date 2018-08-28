class Api::TaskAttributesController < ApplicationController
  def index
    @attributes = class_name.all

    render "api/task_attributes/index"
  end
end
