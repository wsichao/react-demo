// 容器组件,负责管理数据和业务逻辑,不负责UI的渲染
// 容器组件和展示组件是React组件的两种不同的角色,容器组件负责管理数据和业务逻辑,展示组件负责UI的渲染
import Count from '../../component/login'

// connect 是一个函数,它接受两个参数:mapStateToProps和mapDispatchToProps,返回一个函数,这个函数接受一个组件作为参数,返回一个新的组件
// mapStateToProps 是一个函数,它接受一个参数:state,返回一个对象,这个对象的属性会被合并到组件的props中
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: 'increase'}),
  decrement: () => dispatch({type: 'decrease'})
});
export default connect(mapStateToProps, mapDispatchToProps)(Count)