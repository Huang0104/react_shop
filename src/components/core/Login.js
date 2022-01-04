import React from 'react'
import Layout from './Layout'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
import { API } from '../../config'
import { useHistory } from 'react-router'

function Login() {
  const histry = useHistory()
  const handleOnFinish = async value => {
    // 发送登录请求
    const loginResponse = await axios.post(`${API}/signin`, value)
    console.log(loginResponse)
    // 发送请求成功
    if(loginResponse.status === 200) {
      // 将数据储存至本地
      localStorage.setItem('token', JSON.stringify(loginResponse.data))
    }
    // 页面跳转
    let url = loginResponse.data.user.role === 0 ? '/user/dashboard' : '/admin/dashboard'
    histry.push(url)
  }
  return (
    <Layout title="登录" subTitle="请登录，以便进行后续操作！">
      <Form onFinish={handleOnFinish}>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{marginLeft: '50%'}}>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Login
