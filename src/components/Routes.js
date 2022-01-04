import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import AddProducts from './admin/AddProducts'
import AdminDashboard from './admin/AdminDashboard'
import Order from './admin/Order'
import PrivateAdmin from './admin/PrivateAdmin'
import PrivateUser from './admin/PrivateUser'
import UserDashboard from './admin/UserDashboard'
import Cart from './core/Cart'
import Details from './core/details'
import Home from './core/Home'
import Login from './core/Login'
import Registry from './core/Registry'
import Shop from './core/Shop'

function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/shop' component={Shop} />
      <Route path='/login' component={Login} />
      <Route path='/registry' component={Registry} />
      <Route path='/cart' component={Cart} />
      <PrivateUser path='/user/dashboard' component={UserDashboard} />
      <PrivateAdmin path='/admin/dashboard' component={AdminDashboard} />
      <PrivateAdmin path='/create/addCategory' component={AddCategory} />
      <PrivateAdmin path='/create/addProducts' component={AddProducts} />
      <PrivateAdmin path='/admin/order' component={Order} />
      <Route path='/products/details/:productId' component={Details} />
    </Switch>
  )
}

export default Routes
