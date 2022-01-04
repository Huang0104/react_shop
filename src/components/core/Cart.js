import { Col, Form, Input, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCart } from '../../helpers/cart'
import CartItem from './CartItem'
import Layout from './Layout'
import PayButton from './PayButton'

const { Title } = Typography

function Cart() {
  // 设置添加购物车初始值和方法
  const [cart, setCart] = useState([])
  // 设置收获地址初始值和修改方法
  const [address, setAddress] = useState('')
  // 设置商品总价和修改方法
  const [priceTotal, setPriceTotal] = useState(0)
  useEffect(() => {
    setCart(getCart())
  }, [])
  useEffect(() => {
    // total： 计算结束后的放回结果， currentValue: 当前商品元素信息
    const totalPrice = cart.reduce((total, currentValue) => {
      return total += currentValue.count * currentValue.price
    }, 0).toFixed(2)
    setPriceTotal(totalPrice)
    console.log(cart)
  }, [cart])
  // 表格标题
  const cartTable = () => {
    return (
      <table style={{width: '100%'}}>
        <thead className="ant-table-thead">
        <tr>
          <th className="ant-table-cell">商品封面</th>
          <th className="ant-table-cell">商品名称</th>
          <th className="ant-table-cell">商品价格</th>
          <th className="ant-table-cell">商品分类</th>
          <th className="ant-table-cell">商品数量</th>
          <th className="ant-table-cell">操作</th>
        </tr>
      </thead>
      <tbody className="ant-table-tbody">
        {
          cart.map(product => {
            return (
              <CartItem key={product._id} products={product} setCart={setCart}/>
            )
          })
        }
        
      </tbody>
      </table>
    )
  }
  return (
    <Layout title='购物车' subTitle='付款吧，我就是你的了~'>
      <Row gutter={[16]}>
        <Col span='18'>{cartTable()}</Col>
        <Col span='6'>
          <Form>
            <Form.Item label="收货地址">
            <Input placeholder='请输入收货地址' value={address} onChange={e => {setAddress(e.target.value)}}/>
            </Form.Item>
          </Form>
          <Title level={5}>总价: {priceTotal}</Title>
          <PayButton cart={cart} address={address} priceTotal={priceTotal} />
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart
