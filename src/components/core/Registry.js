import React, { useEffect } from 'react'
import Layout from './Layout'
import { Form, Input, Button, Spin, Alert, Result } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { registry, registry_reset } from '../../store/Actions/registry'
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const antIcon = <LoadingOutlined style={{ fontSize: 24, margin: '0 auto' }} spin />
function Registry() {
  const dispatch = useDispatch()
  //提交表单
  const handleOnFinish = value => {
    dispatch(registry(value))
  }
  // 获取状态
  const registryStatus = useSelector(state => state.registryReducer)
  // 正在发送注册请求，显示 loading
  const showLoading = () => {
    if(registryStatus.loading) return <Spin indicator={antIcon} tip='loading'><Alert /></Spin>
  }
  // 注册成功，清空表单
    // 获取表单实例
    const [form] = Form.useForm()
    useEffect(()=>{
      if(registryStatus.loaded && registryStatus.success) {
        form.resetFields()
      }
    }, [registryStatus.loaded, registryStatus.success])
    // 显示成功信息
    const showSuccess = () => {
      if(registryStatus.loaded && registryStatus.success)
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary" key='console'>
              <Link to='/login'>登录</Link>
            </Button>
          ]}
        />
      )
    }
  // 注册失败,显示失败信息
  const showFail = () => {
    if(registryStatus.loaded && !registryStatus.success) {
      return (
        <Result
          status="error"
          title="注册失败"
          subTitle={registryStatus.message}
        />
      )
    }
  }
  // 离开页面，重置注册表单
  // const showReset = () => {
  //   dispatch(registry_reset())
  // }
  useEffect(() => {
    return () => {
      dispatch(registry_reset())
    }
  }, [])
  // 注册表单组件
  const registryForm = () => {
    return (
      <Form onFinish={handleOnFinish} form={form}>
        <Form.Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: '请输入用户名!' }]}
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
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item style={{marginLeft: '50%'}}>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    )
  }
  return (
    <Layout title="注册" subTitle="注册一个账号吧！">
      {showLoading()}
      {showSuccess()}
      {showFail()}
      {/* {showReset()} */}
      {registryForm()}
    </Layout>
  )
}

export default Registry
