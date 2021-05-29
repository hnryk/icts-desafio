import React from 'react'
import { Menu } from 'antd'
const MenuItem = (props)=> {
    return (
        <Menu.Item {...props} key={props.key} icon={props.icon}>
            {props.children}
        </Menu.Item>
    )
}

export default MenuItem