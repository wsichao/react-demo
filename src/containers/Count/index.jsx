// 容器组件,负责管理数据和业务逻辑,不负责UI的渲染
// 容器组件和展示组件是React组件的两种不同的角色,容器组件负责管理数据和业务逻辑,展示组件负责UI的渲染
import Count from '../../component/Count'

// connect 是一个函数,它接受两个参数:mapStateToProps和mapDispatchToProps,返回一个函数,这个函数接受一个组件作为参数,返回一个新的组件
import { connect } from 'react-redux'

// mapStateToProps 是一个函数,它接受一个参数:state,返回一个对象,这个对象的属性会被合并到组件的props中
const mapStateToProps = state => ({count: state}) // 返回一个对象,这个对象的属性会被合并到组件的props中,count是一个属性名,0是一个值,这个值会被合并到组件的props中,count属性的值就是0

// mapDispatchToProps 是一个函数,它接受一个参数:dispatch,返回一个对象,这个对象的属性会被合并到组件的props中
// （{}）代表的是 return {}
const mapDispatchToProps = dispatch => ({
  increment: value => dispatch({type: 'INCREMENT', data: value}),
  decrement: value => dispatch({type: 'DECREMENT', data: value})
}) // 返回一个对象,这个对象的属性会被合并到组件的props中,increment是一个属性名,一个函数是一个值,这个值会被合并到组件的props中,increment属性的值就是一个函数,这个函数的作用是将count的值加1

// 这个容器组件的作用是将store中的state和dispatch合并到Count组件的props中(也可以说是映射),这样Count组件就可以访问store中的state和dispatch了
export default connect(mapStateToProps, mapDispatchToProps)(Count)