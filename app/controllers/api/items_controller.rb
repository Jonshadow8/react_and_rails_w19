class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: Item.order("created_at")
  end

  def show
    render json: @item
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }
    end
  end

  def update
    @item.update(complete: !@item.complete)
    render json: @item
  end

  def destroy
    @item.destroy
    render json: { message: "Item deleted" }
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :complete)
    end
end
