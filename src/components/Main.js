import React, { useState } from 'react'

import { Layout, PageHeader, Button, Drawer } from 'antd'
import 'antd/dist/antd.css'

import { Link } from 'react-router-dom'

const Main = ({ children, pageHeader }) => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Layout>
      <Layout.Content style={{maxWidth:'600px', marginLeft:'auto', marginRight:'auto', width:'100%', backgroundColor:'white', marginBottom:'20px'}} className='main-content'>
        { pageHeader && <PageHeader title={pageHeader.title} extra={[<Button key="3" onClick={()=> setShowMenu(true)}>Menu</Button>]}/>}
        {children}
      </Layout.Content>

      <Drawer title="Menú" placement="right"  visible={showMenu} onClose={()=>setShowMenu(false)} >
         <Link to="/login"><p>Login</p></Link>
      </Drawer>

    </Layout>
  )
}

export default Main
