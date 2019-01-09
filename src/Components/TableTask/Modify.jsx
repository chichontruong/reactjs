import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../Actions/index';

class Modify extends Component{
    constructor(props) {
      super(props)
      this.state = {
        id : "",
        name : "",
        status : false 
      };
    };

    componentWillMount(){
        let task = this.props.taskedit;
        this.setState({
            id : task.id,
            name : task.name,
            status : task.status
        });
    }

    componentWillReceiveProps(props){
        let task = props.taskedit;
        this.setState({
            id: task.id,
            name: task.name,
            status: task.status
        });
    }

    onCancel = () =>{
        this.props.onCleanForm();
        this.props.onCloseForm();
    }
    onSave = () => {
        if(this.state.tasks === ""){
            this.props.onAddTask(this.state);
        }
        else{
            this.props.onUpdateTask(this.state);
        }
        this.props.onCloseForm();
    };

    onChange = () => {
        this.setState({
            name: this.refs.name.value,
            status: this.refs.status.value === "true" ? true : false
        })
    }
    render(){
        return(
            <div className="col-xs-4">
                <legend>
                        <b>{this.state.id === "" ? "Thêm mới công việc" : "Cập nhật công việc"}</b>
                        <i style = {{float:"right", color: "#F00",cursor: "pointer"}} 
                            className="glyphicon glyphicon-remove"
                            onClick = {this.props.onCloseForm}
                        ></i>
                </legend>
                
                <div className="form-group">
                        <label>Tên</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Nhập tên công việc..." 
                            ref="name"
                            name = "name"
                            value={this.state.name}
                            onChange = {this.onChange}
                        />
                        <br/>
                        <label>Trạng thái</label>
                        <select 
                            className="form-control" 
                            ref="status"
                            name = "status"
                            value={this.state.status}
                            onChange = {this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                        </select>
                        
                </div>
                <div style={{float:"right"}}>
                    <button type="button" 
                        className="btn btn-success" 
                        style={{marginRight:"5px"}}
                        onClick={this.onSave}
                    >
                        <i className="glyphicon glyphicon-ok"></i> 
                        Lưu
                    </button>
                    <button type="button" 
                        className="btn btn-danger"
                        onClick={this.onCancel}
                        >
                            <i className="glyphicon glyphicon-remove"></i> Hủy
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.tasks,
        taskedit: state.taskedit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : task => {
            dispatch(actions.addTask(task));
        },
        onUpdateTask : task => {
            dispatch(actions.updateTask(task));
        },
        onCloseForm : () => {
            dispatch(actions.closeFrom());
        },
        onCleanForm : () => {
            dispatch(actions.cleanForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modify);