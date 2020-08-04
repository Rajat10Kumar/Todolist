import React ,{Component} from 'react';
import TodoInput from "../src/Todo/Todoinput"
import TodoList from "../src/Todo/Todolist"
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from "uuid/dist/v4"

class App extends Component
{
  state = {
    items:[],
    item:"",
    id:uuid(),
    edit:false
  }

  handlechange = (e)=>{
   
    this.setState({
      item:e.target.value
    })
  }
  
  handleSubmit = (e)=>{
    e.preventDefault()
    const newItem = {
      title:this.state.item,
      id:this.state.id
    }

    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      id:uuid(),
      item:"",
      edit:false
    })
  }

  clearList = () =>{
     this.setState({
       items:[]
     })
  }

  deleteItem = (id)=>{
    const filterItems = this.state.items.filter(item=> item.id !== id)
    this.setState({
      items:filterItems
    })
  }

  editItem = (id)=>{
    const filterItems = this.state.items.filter(item=> item.id !== id)

    const selectedItem = this.state.items.find(item=> item.id === id)

    this.setState({
      items:filterItems,
      item:selectedItem.title,
      edit:true
      
    })
  }

  render()
  {
    return(
      <div className="container">
        <div className="row">
          <div className ="col-10 col-md-8 mt-4 mx-auto">
               <h3 className="text-center">Todo Input</h3>
              <TodoInput 
              handlechange={this.handlechange} 
              value={this.state.item}
              handleSubmit={this.handleSubmit}
              edit={this.state.edit}
              />
              <TodoList 
              items={this.state.items}
              clearList={this.clearList}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
              />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
