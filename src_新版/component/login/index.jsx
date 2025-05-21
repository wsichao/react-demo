import React, {Component} from "react";
import { Select, Button } from "antd";
import "./index.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
      ]
    };
  }
  
  increment = () => {
    this.props.store.dispatch({type: 'increase'})
  }
  decrement = () => {
    this.props.store.dispatch({type: 'decrease'})
  }
  render() {
    return (
      <div className="login">
        <div>
          <span>合计：{this.props.store.getState()}</span><br />
          <span>选择：</span>
          <Select ref={c => this.select = c} options={this.state.options} />
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </div>
      </div>
    )
  }
}