import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js"
import { Todo } from "../models/Todo.js";



function _drawTodos() {
if (AppState.todos){
  let todosCount = AppState.todos.filter(todo => !todo.completed)
  let todoLeft = todosCount.length
  setHTML("todosCount", todoLeft)
    
  console.log('Did this Draw');
  let template = ''
  AppState.todos.forEach(t => { template += t.ActiveTodoList })
  
  setHTML('TodosList', template)
  AppState.on('todos')
}

}

export class TodosController {
  constructor() {
    // console.log('Todo Controller');
    setHTML('todoForm', Todo.TodoTemplate())

    AppState.on('account', this.getTodosApi,)
    AppState.on('todos', _drawTodos)
    _drawTodos()
  }

  async getTodosApi() {
    try {
      await todosService.getTodosApi()
    } catch (error) {
      Pop.error(error)
    }
  }
  async addTodo() {
    window.event?.preventDefault()
    // @ts-ignore
    const form = window.event.target

    let formData = getFormData(form)


    try {
      await todosService.addTodo(formData)
    } catch (error) {
      Pop.error(error)
    }
    form.reset()
  }
  async deleteTodo(id) {
    try {

      const yes = await Pop.confirm('Delete Todo?')

      if (!yes) {
        return
      }
      await todosService.deleteTodo(id)
    } catch (error) {
      Pop.error(error)
    }

  }
  async completedCheckbox(id) {
    try {
      await todosService.completedCheckbox(id)
    } catch (error) {
      Pop.error(error)
    }

  }
}