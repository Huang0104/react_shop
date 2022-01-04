import { useState } from 'react';
import Layout from '../core/Layout' 
import { Upload, Form, Input, Select, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { isAuth } from '../../helpers/Auth';
import { useHistory } from 'react-router';
import axios from 'axios'
import { API } from '../../config'
import GetCategories from '../../helpers/getCategory';

const { Option } = Select

function AddGoods() {
  // 用于 路由跳转
  const history = useHistory()
  // 创建 form 实例
  const [form] = Form.useForm()
  // 调用 isAuth
  const Auth = isAuth()
  // 储存 上传的文件
  const [file, setfile] = useState()
  // 调用 getCategories()， 获取分类列表
  const categories = GetCategories()
  // 上传按钮
  const uploadButton = () => (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传封面</div>
    </div>
  )
  // 是否需要快递服务
  const isNeed = [
    { id: 1, value: '请选择' },
    { id: 2, value: '需要' },
    { id: 3, value: '不需要' },
  ]
  // 阻止图片自动上传
  const props = {
    beforeUpload(file) {
      // 储存文件
      setfile(file)
      return false
    }
  }
  const handleOnFinish = value => {
    console.log(value)
    // 创建 formData 实例
    let formData = new FormData()
    // 将表单值与上传的图片存放至 formData 中
    for (let attr in value) {
      formData.append(attr, value[attr])
    }
    formData.append('photo', file)
    // 发送 添加商品 请求
    axios.post(`${API}/product/create/${Auth.user._id}`, formData, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    }).then(() => {
      // 添加成功提示信息
      message.success('商品添加成功')
      // 返回 dashboard 页面
      history.push('/admin/dashboard')
      //清除表单
      form.resetFields()
    })
  }

  return (
    <Layout title='添加商品'>
      <Upload listType="picture-card" {...props}>
        {uploadButton()}
      </Upload>
      <Form
        form={form}
        initialValues={
          {category: '请选择分类', shipping: isNeed[0].value}
        }
        onFinish={handleOnFinish}
      >
        <Form.Item
          label='商品名称'
          name='name'
          rules={[{required: true, message: '请输入商品名称'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='商品描述'
          name='description'
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='商品价格'
          name='price'
          rules={[{required: true, message: '请输入商品价格'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='商品分类'
          name='category'
          rules={[{required: true, message: '请选择商品分类'}]}
        >
          <Select>
            <Option value="请选择分类">请选择分类</Option>
            {
              categories.map(category => {
                const id = category._id
                return (
                  <Option value={id} key={id}>{category.name}</Option>
                )
              })
            }
          </Select>
        </Form.Item>
        <Form.Item
          label='商品数量'
          name='quantity'
          rules={[{required: true, message: '请输入商品数量'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='是否需要快递服务'
          name='shipping'
          rules={[{required: true, message: '请选择是否需要'}]}
        >
          <Select>
            {
              isNeed.map(res => {
                return (
                  <Option
                    value={res.value === '需要' ? true: false}
                    key={res.id}
                  >{res.value}</Option> 
                )
              })
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>添加商品</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default AddGoods
