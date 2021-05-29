import React from 'react'
import Typography from '../../atoms/Typography'
import {Layout, Content} from './GroupsCard.style'
const GroupsCard = ()=> {
    return (
        <>
            <Typography type='title' level={5} bold>Groups</Typography>
            <Layout>
                <Content>
                    <Typography type='title' level={4} color="#707070" textAlign="center">Total of groups registered</Typography>
                    <Typography type='title' level={1} color="#C5004F" textAlign="center" bold marginTop={16} marginBottom={16}>588</Typography>
                </Content>
                <Content display="flex">
                    <Content width='50%'>
                        <Typography type='title' level={3} color="#222222" textAlign="center">38</Typography>
                        <Typography type='title' level={5} color="#707070" textAlign="center">Groups</Typography>
                    </Content>
                    <Content width='50%'>
                        <Typography type='title' level={3} color="#222222" textAlign="center">12</Typography>
                        <Typography type='title' level={5} color="#707070" textAlign="center">Subgroups</Typography>
                    </Content>
                </Content>
            </Layout>
        </>
    )
}

export default GroupsCard