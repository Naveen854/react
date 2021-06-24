import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  constructor(props) {
    super(props)
    this.state = {todoList: props.todoList}
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(each => each.id !== id)
    this.setState({
      todoList: filteredTodoList,
    })
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="app-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-items-container">
            {todoList.map(eachTodo => (
              <TodoItem
                todoData={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
