import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../Actions/index';

class Control extends Component {
    onToggle = () => {
        this.props.onToggleForm(this.props.isDisplayForm);
        this.props.onCleanForm();
    }

    onSearchTask = () => {
        let searchKey = this.refs.search.value;
        this.props.onSearch(searchKey);
    }

    onSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onSearchTask();
        }
    }
    
    render() {
        return (
            <div>
                <button type="button"
                    className="btn btn-primary"
                    style={{ marginBottom: "5px" }}
                    onClick={this.onToggle}
                >
                    <i className="glyphicon glyphicon-plus"></i> Thêm công việc
                </button>

                <div className="row" style={{ marginBottom: "5px" }}>
                    <div className="col-xs-7">
                        <div className="input-group">
                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Nhập từ khóa..." ref="search" onKeyDown={this.onSearchKeyDown}/>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary" onClick = {this.onSearchTask}><i className="glyphicon glyphicon-search"></i> Tìm</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: isDisplay => {
            dispatch(actions.toggleForm(isDisplay));
        },

        onCleanForm : () => {
            dispatch(actions.cleanForm());
        },

        onSearch : (search) =>{
            dispatch(actions.searchTask(search));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control); 