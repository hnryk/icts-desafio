import React, {useState, useEffect} from 'react'
import MenuItem from '../atoms/MenuItem'
import {Link} from 'react-router-dom'
import {Menu} from './Menu.style'

const Index = (props)=> {
    return (
        <Menu theme={props.theme} defaultSelectedKeys={['0']} mode="inline" backgroundColor="#FFFFFF">
            {props.data.map(v=>(<MenuItem icon={<v.icon />} key={v.key}>{v.value}<Link to={v.link}></Link></MenuItem>))}
        </Menu>
    )
}

export default Index