import React from 'react'
import Layout from '../core/Layout'
// import { useSelector } from 'react-redux'
import { Row, Col, Menu, Typography, Descriptions } from 'antd'
import { Link } from 'react-router-dom'
import { BarsOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Fragment } from 'react/cjs/react.production.min'
import { isAuth } from '../../helpers/Auth'

const { Title } = Typography
const Auth = isAuth()

function AdminDashboard() {
  // 存储选中路由
  // const router = useSelector(state => state.router).location.pathname
  // 管理员链接
  const AdminLinks = () => {
    return (
      <Fragment>
        <Title level={5}>管理员链接</Title>
        {/* <Menu selectedKeys={[router]}> */}
        <Menu>
          <Menu.Item>
            <ShoppingCartOutlined />
            <Link to='/create/addCategory'>添加分类</Link>
          </Menu.Item>
          <Menu.Item>
            <ShoppingOutlined />
            <Link to='/create/addProducts'>添加商品</Link>
          </Menu.Item>
          <Menu.Item>
            <BarsOutlined />
            <Link to='/admin/order'>订单列表</Link>
          </Menu.Item>
        </Menu>
      </Fragment>
    )
  }
  // 管理员信息
  const AdminInfo = () => {
    return (
      <>
        {/* <Title level={5}>管理员信息</Title> */}
        <Descriptions title='管理员信息' bordered>
          <Descriptions.Item label='昵称'>{Auth.user.name}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{Auth.user.email}</Descriptions.Item>
          <Descriptions.Item label='角色'>管理员</Descriptions.Item>
        </Descriptions>
      </>
    )
  }
  return (
    <Layout title='管理员 Dashboard'>
      {/* 行 */}
      <Row>
        {/* 列 */}
        <Col span='4'>{AdminLinks()}</Col>
        <Col span='20'>{AdminInfo()}</Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard
