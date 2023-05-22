import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId


  }


  get ActiveTodoList() {
    return /*html*/ `
    
      <p class="fs-5 d-flex align-items-center justify-content-between">
        <input type="checkbox" 
        onchange="app.TodosController.completedCheckbox('${this.id}')"
        ${this.completedCheckbox}> 
          <span>
            ${this.description}
          </span>
        <button class="btn btn-outline-dark mdi mdi-delete" onclick="app.TodosController.deleteTodo('${this.id}')">
        </button>
      </p>`
  }
  get completedCheckbox() {
    return this.completed ? 'checked' : ''
  }

  static TodoTemplate() {
    return /*html*/ `
    <div class="col-md-3 m-2 justify-content-end card text-white" id="card-bg">
      <form onsubmit="app.TodosController.addTodo()">
        <label for="description" class="form-label"></label>
        <div class="input-group">
          <input required minlength="3" maxlength="20" type="text" class="form-control" id="description"
            name="description" placeholder="Add Todo">
            <button class="btn input-group-addon btn btn-outline-secondary">➕</button>
        
            </div>
        <div>
          <p>Todos Left: <span id="todosCount">0</span></p>
        </div>
      </form>
      <div id="TodosList">
      </div>
    </div>
`

  }


  // get todoCount(){
  // return AppState.todos.length - this.completed
  // }
}