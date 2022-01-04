
// 添加购物车
export function addItem(item, next) {
  // 储存购物车的商品
  let cart = []
  // 先判断 window 是否存在,因为本地存储是储存在 window 下
  if (typeof window !== 'undefined') {
    if(localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    // 存储 商品 以及商品数量为1
    cart.push({
      ...item,
      count: 1
    })
    // 商品有可能重复添加，所以要去重
    cart = Array.from(new Set(cart.map(product => product._id))).map(id => cart.find(product => product._id === id))
    // 将商品设置到本地存储中
    localStorage.setItem('cart', JSON.stringify(cart))
    // 接收页面跳转函数
    next && next()
  }
}

// 获取购物车商品
export function getCart() {
  // 先判断 window 是否存在,因为本地存储是储存在 window 下
  if (typeof window !== 'undefined') {
    if(localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'))
    }
  }
  return []
}

// 更新购物车商品
export function updateCart(productId, count) {
  // 储存购物车的商品
  let cart = []
  // 先判断 window 是否存在,因为本地存储是储存在 window 下
  if (typeof window !== 'undefined') {
    if(localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
      const item = cart.find(product => product._id === productId)
      item.count = count
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  return cart
}

// 删除购物车商品
export function deleteItem(productId) {
  // 储存购物车的商品
  let cart = []
  // 先判断 window 是否存在,因为本地存储是储存在 window 下
  if (typeof window !== 'undefined') {
    if(localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
      const Index = cart.findIndex(product => product._id === productId)
      cart.splice(Index, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  return cart
}