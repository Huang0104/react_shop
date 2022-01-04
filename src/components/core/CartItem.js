import React, { useState } from 'react'
import { Button, Image, Input } from 'antd'
import { API } from '../../config'
import { deleteItem, updateCart } from '../../helpers/cart'

function CartItem({products, setCart}) {
  // 跟新购物车商品数量
  const [count, setCount] = useState(products.count)
  const handleChange = event => {
    const count = parseInt(event.target.value)
    setCount(count)
    setCart(updateCart(products._id, count))
  }
  // 删除购物车商品
  const handleDelete = () => {
    if(window.confirm(`确定删除作品： ${products.name} 吗?`)) {
      setCart(deleteItem(products._id))
    }
  }
  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${products._id}`} />
      </td>
      <td className="ant-table-cell">{products.name}</td>
      <td className="ant-table-cell">{products.price}</td>
      <td className="ant-table-cell">{products.category.name}</td>
      <td className="ant-table-cell">
        {/* <Input type="number" value={products.count} /> */}
        <Input type="number" value={count} onChange={handleChange} />
      </td>
      <td className="ant-table-cell">
        <Button type='primary' danger onClick={handleDelete}>删除</Button>
      </td>
    </tr>
  )
}

export default CartItem
