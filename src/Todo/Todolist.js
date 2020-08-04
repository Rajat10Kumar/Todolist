import React, { Component } from 'react';
import TodoItem from './Todoitem'
class Todolist extends Component {
    render() {
        const {items,clearList,deleteItem,editItem} = this.props
        return (
            <div>
                <ul className="list-group">
                    <h3 className="text-center">Todo List</h3>
                    {
                        items.map(item => <TodoItem  
                            key={item.id} 
                            title={item.title}
                             deleteItem={()=>deleteItem(item.id)}
                             editItem={()=>editItem(item.id)}
                             /> )
                    }
                    <button type="button" className="btn btn-block btn-danger my-4" onClick={clearList}>Clear List</button>
                </ul>
            </div>
        );
    }
}

export default Todolist;