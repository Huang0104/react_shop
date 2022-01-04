import Layout from './Layout'
import Search from './Search'
import { Row, Col, Typography  } from 'antd'
import Products from './Products'
import { useDispatch,  useSelector} from 'react-redux'
import { useEffect } from 'react'
import { get_Products } from '../../store/Actions/Products'

const { Title } = Typography

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_Products({sortBy: 'sold', limit: 4, order: 'desc'}))
    dispatch(get_Products({sortBy: 'createdAt', limit: 4, order: 'desc'}))
  }, [])
  // const { createdAt, sold } = useSelector(state => state.products)
  const products = useSelector(state => state.products)
  return (
    <Layout title="拉勾严选首页" subTitle="欢迎来到拉勾严选首页">
      <Search />
      <Title level={5} style={{marginTop: 10 }}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {
          products.createdAt.map(products => {
            return (
                <Col span='6' key={products._id}>
                  <Products products={products}/>
                </Col>
            )
          })
        }
      </Row>
      <Title level={5} style={{marginTop: '10px'}}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {
          products.sold.map(products => {
            return (
                <Col span='6' key={products._id}>
                  <Products products={products}/>
                </Col>
            )
          })
        }
      </Row>
    </Layout>
  )
}

export default Home
