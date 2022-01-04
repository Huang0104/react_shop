import { useEffect, useState} from 'react'
import axios from 'axios';
import {API} from '../config'

export default function GetCategories() {
  // 获取 分类列表
  const [categories, setcateory] = useState([])
  useEffect(() => {
    // 发送请求，获取分类列表
    async function getCategory() {
      const category = await axios.get(`${API}/categories `)
      // 将 列表数据更新到 categories 
      setcateory(category.data)
    }
    getCategory()
  }, [])
  return categories
}

