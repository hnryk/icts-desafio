import React from 'react'
import { Card as CardAD } from 'antd'
import Typography from '../../atoms/Typography'
import {Header} from './Card.style'

const ConsumptionByTimeUnit = (props)=> {
    return(
        <CardAD style={{width: props.width ? props.width : '100%'}}>
            <Header />
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <Typography type="text" color="#707070">{props.textHeader.leftText}</Typography>
                </div>
                <div style={{width: '50%', textAlign: 'end'}}>
                    <Typography type="text" color="#707070" >{props.textHeader.rightText}</Typography>
                </div>
            </div>
            <div style={{borderWidth: 1, width: '100%', marginTop: 12}}>
                <Typography type="title" level={3} color="#C5004F" textAlign="center">{props.content}</Typography>
            </div>
            <div style={{borderWidth: 1, width: '100%'}}>
                <Typography type="title" level={5} color="#707070" textAlign="center">{props.footer}</Typography>
            </div>
        </CardAD>
    )
}

export default ConsumptionByTimeUnit