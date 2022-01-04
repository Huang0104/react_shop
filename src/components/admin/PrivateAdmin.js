import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { isAuth } from '../../helpers/Auth'

function PrivateAdmin({component: Component, ...reset}) {
  return (
    <Route {...reset} render={ props => {
      if(isAuth() && isAuth().user.role === 1) return <Component {...props} />
      return <Redirect to='/login'/>
    }}>
      
    </Route>
  )
}

export default PrivateAdmin
