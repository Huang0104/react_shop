import React from 'react'
import Layout from '../core/Layout'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { API } from '../../config'
import { isAuth } from '../../helpers/Auth'
import { Link } from 'react-router-dom'

function AddCategory() {
  const Auth = isAuth()
  const handleOnFinish =value => {
    axios.post(`${API}/category/create/${Auth.user._id}`, value, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    }).then (response => {
      console.log(response)
      message.success(`${response.data.name} 添加成功`)
    })
  }
  return (
    <Layout title='添加分类'>
      <Form onFinish={handleOnFinish}>
        <Form.Item
          label='分类名称'
          name='name'
          rules={[{required: true, message: '请输入分类名称'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>确认添加</Button>
          <Button type='primary' style={{marginLeft: '50px'}}>
            <Link to='/admin/dashboard'>返回</Link>
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default AddCategory
