import React from 'react'
import { Row, Col, Card, Typography, Button, Image, Space } from 'antd'
import { Link } from 'react-router-dom'
import dataformat from 'dataformat'
import axios from 'axios'
import { API } from '../../config'
import { addItem } from '../../helpers/cart'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const { Title, Paragraph } = Typography

function Products(props) {
  const dispatch = useDispatch()
  const { imgStyle, showView = true, showCart = true, products } = props
  const {name, description, category, price, quantity, createdAt, _id} = props.products
  // 定义 添加购物车方法
  const addToCart = () => {
    addItem(products, ()=> {
      dispatch(push('/cart'))
    })
  }
  // 判断 展示 详情按钮 或是 加入购物车按钮
  const showButtons = () => {
    const buttons = []
    if(showView) {
      buttons.push(
        <Button type='link'>
          <Link to={`/products/details/${_id}`}>查看详情</Link>
        </Button>
      )
    }
    if (showCart) {
      buttons.push(
        <Button onClick={addToCart} type='link'>加入购物车</Button>
      )
    }
    return buttons
  }
  return (
    <Card
      cover={<Image style={imgStyle} alt="加载失败" src={`${API}/product/photo/${_id}`}/>}
      actions={[showButtons()]}
    >
      <Title level={5}>{name}</Title>
      <Paragraph ellipsis={{rows: '2'}}>{description}</Paragraph>
      <Row style={{fontSize: 12}}>
        <Col span='12'>价格：{price}</Col>
        <Col span='12'>销量：{quantity}</Col>
      </Row>
      <Row style={{fontSize: 12}}>
        <Col>所属分类：{category.name}</Col>
        <Col>上架时间：{dataformat(createdAt, "yyyy-mm-dd")}</Col>
      </Row>
    </Card>
  )
}

export default Products
