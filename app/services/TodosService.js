import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Todo } from "../models/Todo.js";
class TodosService {
  async deleteTodo(id) {
    const res = await api.delete(`api/todos/${id}`)
    console.log('DELETED?', res.data)
    AppState.todos = AppState.todos.filter(t => t.id != id)
  }

  async getTodosApi() {
    const res = await api.get('/api/todos')
    console.log('WHAT Todos=', res.data);
    AppState.todos = res.data.map(t => new Todo(t))
    console.log('TODO WHAT', AppState.todos);
    AppState.emit('todos')
    

  }
  async addTodo(formData) {
       // console.log('SUBMITTED = ', formData);
    const res = await api.post('/api/todos', formData)
    console.log('THE ADDED TODO IS', res.data);
    const newTodo = new Todo(res.data)
    AppState.emit('todos')
    AppState.emit('account')

    
  }

  async completedCheckbox(id) {
    const todo = AppState.todos.find(t => t.id == id)
    todo.completed = !todo.completed
    const res = await api.put('api/todos/' + id, todo)
    console.log('did it work?', res.data)
    AppState.emit('todos')
  }
}

export const todosService = new TodosService()