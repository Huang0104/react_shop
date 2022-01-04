import { Col, Row, Typography, List, Radio } from 'antd'
import React from 'react'
import prices from '../../helpers/price'

const { Title } = Typography

function FilterPrice({handlerFilters}) {

  // 筛选条件变化
  const onChange = event => {
    handlerFilters(event.target.value)
  }

  return (
    <>
      <Title level={5}>按照价格筛选</Title>
      <Radio.Group onChange={onChange}>
        <List 
          dataSource={prices}
          renderItem={item => (
            <List.Item>
              <Radio value={item.array}>
                {item.name}
              </Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  )
}

export default FilterPrice
