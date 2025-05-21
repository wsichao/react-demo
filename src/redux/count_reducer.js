// 该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
export default function countReducer(preState = 0, action) {
  const {type, data} = action
  switch (type) {
    case 'INCREMENT':
      return preState + data
    case 'DECREMENT':
      return preState - data
    default:
      return preState
  }
}