import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { isAuth } from '../../helpers/Auth'

function PrivateUser({component: Component, ...reset}) {
  return (
    <Route {...reset} render={ props => {
      if(isAuth()) return <Component {...props} />
      return <Redirect to='/login'/>
    }}>
      
    </Route>
  )
}

export default PrivateUser
