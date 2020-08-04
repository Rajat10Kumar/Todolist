import React, { Component } from 'react';
import {BsPencil,BsTrash} from "react-icons/bs"
class Todoitem extends Component {
    render() {
        const {title,deleteItem,editItem} = this.props
        return (
            <div>
               <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
               <h6>{title}</h6>
                 <div>
                     <span className="mx-2 text-success" onClick={editItem} >
                       <BsPencil />  
                     </span>
                     <span className="mx-2 text-danger" onClick={deleteItem}>
                        <BsTrash/>
                     </span>
                 </div>
               </li>
            </div>
        );
    }
}

export default Todoitem;