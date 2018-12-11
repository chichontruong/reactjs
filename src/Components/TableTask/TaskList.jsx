import React, { Component } from 'react'
import TaskItem from './TaskItem';
import Control from './Control';
import Modify from './Modify';
import { connect } from 'react-redux';
// import * as actions from './../../Actions/index';

class TaskList extends Component {
      // componentDidMount() {
      //       this.props.onGetTasks();
      // };

      render() {
            let { tasks } = this.props;

            let eleTaskForm = tasks !== null ? tasks.map((item, index) => {
                  return <TaskItem key={index}
                        task={item}
                        index={index}
                  />
            }) : null;

            var eleModify = this.props.isDisplayForm
                  ? <Modify />
                  : '';
            return (
                  <div className="container">
                        <h1 style={{ textAlign: "center" }}>Quản Lý Công Việc</h1>
                        <div className="row">
                              {eleModify}
                              <div className={this.props.isDisplayForm ? "col-xs-8" : "col-xs-12"}>
                                    <Control />
                                    <table className="table table-bordered table-hover">
                                          <thead>
                                                <tr>
                                                      <th style={{ width: "5%", textAlign: "center" }}>STT</th>
                                                      <th style={{ textAlign: "center" }}>Tên công việc</th>
                                                      <th style={{ width: "15%", textAlign: "center" }}>Trạng thái</th>
                                                      <th style={{ width: "25%", textAlign: "center" }}>Hành động</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {eleTaskForm}
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = state => {
      return {
            tasks: state.tasks,
            isDisplayForm: state.isDisplayForm,
            taskedit: state.taskedit
      }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return {
            // onGetTasks: () => {
            //       dispatch(actions.getAllTask());
            // }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);