import React, { Component } from 'react';
import {FcList} from 'react-icons/fc'
class Todoinput extends Component {
    render() {
        const {value,handlechange,handleSubmit,edit} = this.props
        return (
            <div className="card card-body my-4">
                <form onSubmit={handleSubmit}>
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text text-white bg-white">
                                <FcList/>
                            </div>
                        </div>
                        <input type="text" value={value}  placeholder="Add Item" className="form-control" onChange={handlechange}></input>
                    </div>
        <button type="submit" className={edit ? "btn btn-block btn-success mt-2":"btn btn-block btn-primary mt-2"}>{edit ? "Edit Item":"Add Item"}</button>
                </form>
            </div>
        );
    }
}

export default Todoinput;