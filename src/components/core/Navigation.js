import { Menu } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth } from '../../helpers/Auth'
import { Fragment } from 'react'

class Navigation extends Component {
  render() {
  // const router = useSelector(state => state.router)
  const router = this.props.state.router.location.pathname
  // 登录状态
  const Auth = isAuth()
  // 判断 Auth 中的 role 信息， 1 为管理员， 0 为普通用户, 用于跳转
  let url = Auth && Auth.user.role === 1 ? '/admin/dashboard' : '/user/dashboard'
  // 登录时显示
  const showDashborad = () => {
    return (
        <Menu.Item key={url}>
          <Link to={url}>Dashboard</Link>
        </Menu.Item>
    )
  }
  // 未登录时显示
  const showAuth = () => {
    return (
      <Fragment>
        <Menu.Item key='/login'>
          <Link to='/login'>登录</Link>
        </Menu.Item>
        <Menu.Item key='/registry'>
          <Link to='/registry'>注册</Link>
        </Menu.Item>
      </Fragment>
    )
  }
  return (
    <Menu mode='horizontal' selectedKeys={[router]}>
      <Menu.Item key='/'>
        <Link to='/'>首页</Link>
      </Menu.Item>
      <Menu.Item key='/shop'>
        <Link to='/shop'>商城</Link>
      </Menu.Item>
      <Menu.Item key='/cart'>
        <Link to='/cart'>购物车</Link>
      </Menu.Item>
      {Auth ? showDashborad(): showAuth()}
    </Menu>
  )
}
}
// function Navigation() {
//   const router = useSelector(state => state.router)
//   console.log(router)
//   return (
//     <Menu mode='horizontal' selectedKeys={[router.location.pathname]}>
//       <Menu.Item key='/'>
//         <Link to='/'>首页</Link>
//       </Menu.Item>
//       <Menu.Item key='/shop'>
//         <Link to='/shop'>商城</Link>
//       </Menu.Item>
//     </Menu>
//   )

// }
const mapStoreToProps = state => {
  return {
    state
  }
}
export default connect(mapStoreToProps)(Navigation)
