import React, { useEffect } from 'react'
import Layout from './Layout'
import { Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { get_details_by_id } from '../../store/Actions/details'
import { useParams } from 'react-router'
import Products from './Products'

function Details() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)
  console.log(details)
  useEffect(() => {
    dispatch(get_details_by_id({productId}))
  }, [])
  return (
    <Layout title="商品名称" subTitle="商品描述">
      <Row>
        <Col>
          {Object.keys(details).length > 0 && (
            <Products
              products={details}
              imgStyle={{ width: "50%", margin: "0 auto" }}
              showView={false}
            />
          )}
        </Col>
        {/* <Col span="6">right</Col> */}
      </Row>
    </Layout>
  )
}

export default Details
