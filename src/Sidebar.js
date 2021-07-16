import React from 'react'
import { Layout, Menu} from 'antd';
import {NavLink} from "react-router-dom";


const { Sider } = Layout;

const Sidebar = () => {
    return (
        <div>
             <Layout>
      <Sider width={230} >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          theme="dark"
          style={{ height: '1000vh', borderRight: 0 }}
        >
            <Menu.Item  key="1"> <NavLink activeClassName="activeClass" to="/Country">Country</NavLink></Menu.Item>
            <Menu.Item  key="2"> <NavLink activeClassName="activeClass" to="/Summary">Summary</NavLink></Menu.Item>
               
        </Menu>
      </Sider>
      </Layout>
            
        </div>
    )
}

export default Sidebar
