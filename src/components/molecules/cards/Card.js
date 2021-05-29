import React from 'react'
import { Card as CardAD } from 'antd'
const Card = (props)=> {
    return (
        <CardAD style={{width: props.width ? props.width : '100%', height: props.width ? props.height : '100%', marginTop: props.marginTop}}>
            {props.children}
        </CardAD>
    )
}

export default Card