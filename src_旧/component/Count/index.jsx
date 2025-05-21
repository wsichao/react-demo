import React, {Component} from "react";
import { Select, Button } from "antd";
import "./index.css"
import { createIncrementAction, createDecrementAction } from "../../redux/count_action"

export default class Login extends Component {
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