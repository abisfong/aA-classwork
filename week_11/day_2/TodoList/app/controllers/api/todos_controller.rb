class Api::TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors.full_messages, status: 409
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.destroy
      render json: status: 200
    else
      render json: status: 409
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
