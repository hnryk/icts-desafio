import React, {useState} from 'react'
import { Layout } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import Menu from '../../molecules/Menu'
import Logo from '../../../assets/img/logo.png'
import LogoMini from '../../../assets/img/logo_mini.png'

const Sidebar = ()=> {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }

    const menuItems = [
        {
            icon:  PieChartOutlined,
            value: "Dashboard",
            key: 0,
            link: '/'
        },
        {
            icon:  DesktopOutlined,
            value: "Devices",
            key: 1,
            link: '/devices'
        },
        {
            icon:  UserOutlined,
            value: "Groups",
            key: 2,
            link: '/groups'
        },
        {
            icon:  TeamOutlined,
            value: "Comparative",
            key: 3,
            link: '/comparative'
        },
        {
            icon:  FileOutlined,
            value: "Reports",
            key: 4,
            link: '/reports'
        }
    ]

    return (
        <Layout.Sider breakpoint='lg' collapsedWidth="0" collapsed={collapsed} onCollapse={onCollapse} style={{backgroundColor: '#FFFFFF'}}>
            {
                collapsed ? 
                    <img 
                        src={LogoMini}
                        width={68}
                    />
                :
                    <img 
                        src={Logo}
                        width={120}
                        style={{
                            marginLeft: 4
                        }}
                    />
            }
            <Menu theme="light" defaultSelectedKeys={['0']} mode="inline" data={menuItems} />
        </Layout.Sider>
    )
}

export default Sidebar