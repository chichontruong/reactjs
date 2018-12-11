import React, { Component } from 'react'
import * as actions from './../../Actions/index';
import { connect } from 'react-redux';

class TaskItem extends Component{

    onGetTask = () => {
        this.props.onShowForm();
        this.props.onGetTaskEdit(this.props.task);
    }   

    onStatus = () => {
        this.props.onUpdateStatus(this.props.task);
    }
    onDelete = () =>{
        this.props.onDeleteTask(this.props.task);
    }
    
    render(){
        return(
            <tr>
                <td>
                    {this.props.index}
                </td>
                <td>
                    {this.props.task.name}
                </td>
                <td style={{textAlign:"center"}}>
                    {this.props.task.status 
                        ? <span className="label label-success" style={{cursor:"pointer"}} onClick={this.onStatus}>Kích hoạt</span> 
                        : <span className="label label-danger" style={{cursor:"pointer"}} onClick={this.onStatus}>Ẩn</span>} 
                </td>
                <td style={{textAlign:"center"}}>
                    <button type="button" 
                        className="btn btn-warning" 
                        style={{marginRight:"5px"}}
                        onClick={this.onGetTask}
                        > 
                            <i className="glyphicon glyphicon-pencil"></i> Sửa 
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onDelete}
                        >
                            <i className="glyphicon glyphicon-trash"></i> xóa 
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        taskedit: state.taskedit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus : task => {
            dispatch(actions.updateStatus(task));
        },
        onToggleStatus : (id)=>{
            dispatch(actions.ToggleStatus(id));
        },
        onDeleteTask : task => {
            dispatch(actions.deleteTask(task));
        },
        onGetTaskEdit : task => {
            dispatch(actions.getTask(task));
        },
        onShowForm: () =>{
            dispatch(actions.showFrom());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);