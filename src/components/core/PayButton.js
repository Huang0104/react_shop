import { Button } from 'antd'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config'
import { isAuth } from '../../helpers/Auth'

function PayButton({cart, address, priceTotal}) {
  console.log('这是API',API)
  console.log(cart)
  const Auth = isAuth()
  // 提交操作
  const handlePay = () => {
    axios.post(`${API}/alipay`, {
      // 支付宝接口要求的必填参数
      totalAmount: priceTotal,
      subject: '测试订单',
      body: '测试订单描述',
      // 服务器端要求的必填参数
      products: cart.map(product => ({
        product: product._id,
        count: product.count
      })),
      address: address,
      userId: Auth.user._id
    }).then(response => {
      window.location.href = response.data.result
      console.log(response)
    })
  }
  const showButton = () => {
    return Auth ? (
      <Button type='primary' onClick={handlePay}>提交</Button>
    ) : (
      <Button type='primary'>
        <Link to='/login'>登录</Link>
      </Button>
    )
  }
  return (
    <div>{showButton()}</div>
  )
}

export default PayButton
