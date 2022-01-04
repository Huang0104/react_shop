import React from 'react'
import { PageHeader } from 'antd'
import Navigation from './Navigation'

function Layout({children, title , subTitle}) {
  return (
    <div>
        <Navigation />
        <PageHeader title={title} subTitle={subTitle} className='jumbotron'/>
        <div style={{width: '80%', margin: '0 auto'}}>{children}</div>
    </div>
  )
}

export default Layout
