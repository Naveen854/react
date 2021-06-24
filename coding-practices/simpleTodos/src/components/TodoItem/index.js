import './index.css'

const TodoItem = props => {
  const {todoData, deleteTodo} = props
  console.log(todoData)
  const {id, title} = todoData
  const deleteTodoItem = () => deleteTodo(id)
  return (
    <div className="todo-item">
      <p className="todo">{title}</p>
      <button className="delete-todo-button" onClick={deleteTodoItem}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
