import React from 'react'
import { Button, Form, Input, Select, Divider, Row, Col } from 'antd'
import Products from './Products'
import GetCategories from '../../helpers/getCategory'
import { useDispatch } from 'react-redux'
import { get_search_products } from '../../store/Actions/search'
import { useSelector } from 'react-redux'

const { Option } = Select

function Search() {
  // 获取数据
  const { results } = useSelector(state => state.results)
  // 用于出发 actions 函数
  const dispatch = useDispatch()
  // 创建 form 实例，用于重置表单
  const [form] = Form.useForm()
  // 调用 GetCategories, 获取分类列表
  const categoies = GetCategories()
  const handleOnFinish = value => {
    dispatch(get_search_products(value))
    // 重置表单
    form.resetFields()
  }
  return (
    <>
      <Form onFinish={handleOnFinish} form={form} initialValues={{category: 'all'}} layout='inline'>
        <Input.Group compact>
          <Form.Item name='category'>
            <Select>
              <Option value='all'>所有分类</Option>
              {
                categoies.map(category => {
                  return (
                  <Option value={category._id} key={category._id}>{category.name}</Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item name='search'>
            <Input placeholder='请输入搜索关键字' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>搜索</Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
     { <Row>
        {
          results.map(product => {
            return (
              <Col span='6' key={product._id}>
                <Products products={product}/>
              </Col>
            )
          })
        }
        
      </Row>}
    </>
  )
}

export default Search
