import { Col, Row, Typography, List, Checkbox  } from 'antd'
import React from 'react'
import GetCategories from '../../helpers/getCategory'

const { Title } = Typography

function FilterCategory({handlerFilters}) {
  // 调用 GetCategories, 获取分类列表
  const categoies = GetCategories()
  // 复选框变化
  const onChange = checkedValue => {
    handlerFilters(checkedValue)
  }
  return (
    <>
      <Title level={5}>按照分类筛选</Title>
      <Checkbox.Group onChange={onChange}>
        <List 
          dataSource={categoies}
          renderItem={item => (
            <List.Item>
              <Checkbox value={item._id}>
                {item.name}
              </Checkbox>
            </List.Item>
          )}
        />
      </Checkbox.Group>
    </>
  )
}

export default FilterCategory
