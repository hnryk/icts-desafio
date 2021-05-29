import React from 'react'
import ProgressCircle from '../../charts/ProgressCircle'
import Typography from '../../atoms/Typography'
import {Legend, Row, Col} from './ServerCard.style'

const ServerCard = ()=> {
    return (
        <>
            <Typography type='title' level={5} bold>Server</Typography>
            <Typography 
                type='title' 
                level={4} 
                color="#B3B3B3" 
                textAlign="center" 
                marginTop={16} 
                marginBottom={24}
            >DISK USAGE</Typography>
            <Row justify="space-around">
                <Col>
                    <ProgressCircle />
                </Col>
            </Row>
            <Row justify="space-around">
                <Col>
                    <Legend color="#E1E1E1" />
                    <Typography
                        type='title'
                        fontSize={18}
                        color="#222222"
                        textAlign="center"
                    >Available</Typography>
                </Col>
                <Col>
                    <Legend color="#630028" />
                    <Typography
                        type='title'
                        fontSize={18}
                        color="#C5004F"
                    >Used Space</Typography>
                </Col> 
            </Row>
            <Row justify="space-around">
                <Col>
                    <Typography
                        type='title'
                        fontSize={18}
                        color="#222222"
                        textAlign="center"
                    >Available: 500GB</Typography>
                </Col>
                <Col>
                    <Typography
                        type='title'
                        fontSize={18}
                        color="#C5004F"
                        textAlign="center"
                    >Used Space: 250GB</Typography>
                </Col>                            
            </Row>
        </>
    )
}

export default ServerCard