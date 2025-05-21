// 容器组件,负责管理数据和业务逻辑,不负责UI的渲染
// 容器组件和展示组件是React组件的两种不同的角色,容器组件负责管理数据和业务逻辑,展示组件负责UI的渲染

// connect 是一个函数,它接受两个参数:mapStateToProps和mapDispatchToProps,返回一个函数,这个函数接受一个组件作为参数,返回一个新的组件
// mapStateToProps 是一个函数,它接受一个参数:state,返回一个对象,这个对象的属性会被合并到组件的props中
import { connect } from 'react-redux'
import React, {Component} from "react";
import { Select, Button } from "antd";
import {createIncrementAction, createDecrementAction} from "../../redux/count_action"
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
      ]
    };
  }
  changeSelect = (e) => {
    this.setState({select: e})
  }
  increment = () => {
    this.props.increment(this.state.select*1)
  }
  decrement = () => {
    this.props.decrement(this.state.select*1)
  }
  render() {
    return (
      <div className="login">
        <div>
          <span>合计：{this.props.count}</span><br />
          <span>选择：</span>
          <Select onChange={this.changeSelect} options={this.state.options} />
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </div>
      </div>
    )
  }
}
export default connect(state=>({count: state}), {increment:createIncrementAction, decrement:createDecrementAction})(Count)