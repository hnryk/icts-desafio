import React from 'react'
import { List } from 'antd'
import Typography from '../../atoms/Typography'
import {Layout, Content} from './NotificationCard.style'

const NotificationCard = ()=> {

    const data = [
        {
            title: 'Notification of system',
            body: 'Algo está acontecendo em alguma tela desse sistema, visualize as...'
        },
        {
            title: 'Notification of system',
            body: 'Algo está acontecendo em alguma tela desse sistema, visualize as...'
        },
        {
            title: 'Notification of system',
            body: 'Algo está acontecendo em alguma tela desse sistema, visualize as...'
        },
        {
            title: 'Notification of system',
            body: 'Algo está acontecendo em alguma tela desse sistema, visualize as...'
        }
    ]

    return (
        <>
            <Layout>
                <Content>   
                    <Typography type="title" level={5} bold color="#222222">Notifications</Typography>
                </Content>
                <Content>
                    <Typography type="title" level={5} color="#707070" textAlign="end">97 notifications</Typography>
                </Content>                
            </Layout>
            <List
                size="large"
                bordered
                dataSource={data}
                style={{
                    marginTop: 24
                }}
                renderItem={item => 
                    <List.Item style={{display: 'grid'}}>
                        <Typography type="title" level={5} bold color="#222222">{item.title}</Typography> 
                        <Typography type="title" fontSize={12} color='#707070' marginTop={8}>{item.body}</Typography>
                    </List.Item>
                }
            />
        </>
    )
}

export default NotificationCard