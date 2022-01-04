import Layout from './Layout'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import FilterCategory from './FilterCategory'
import FilterPrice from './FilterPrice'
import { Button, Col, Empty, Row, Space } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filter_products } from '../../store/Actions/filter'
import Products from './Products'

function Shop() {
  const [filters, setfilters] = useState({ category: [], price: [] })
  const [skip, setSkip] = useState(0)
  const { data, size } = useSelector(state => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    setSkip(0)
  }, [filters])

  useEffect(() => {
    dispatch(filter_products({ filters, skip }))
  }, [filters, skip])

  const handleMore = () => {
    setSkip(skip + 4)
  }
  return (
    <Layout title="拉勾严选商城列表" subTitle="挑选你喜欢的商品吧~">
      <Row>
        <Col span='4'>
          <Space size='middle' direction='vertical'>
            <FilterCategory handlerFilters={filter => setfilters({...filters, category: filter})}/>
            <FilterPrice handlerFilters={filter => setfilters({...filters, price: filter})}/>
          </Space>
        </Col>
        <Col span='20'>
          <Space size='middle' direction='vertical'>
            <Row gutter={[16, 16]}>
              {
                data.map(product => {
                  return (
                    <Col key={product._id} span='6'>
                      <Products products={product} />
                    </Col>
                  )
                })
              }
            </Row>
            <Row>
              {
                size >= 4 ? <Button onClick={handleMore}>加载更多</Button> : <Empty />
              }
            </Row>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop