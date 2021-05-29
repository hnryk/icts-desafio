import React, {useState} from 'react'
import { Layout, Header, Content } from '../templates/Main.style'
import { HashRouter } from 'react-router-dom'
import Router from '../../Router'
import Sidebar from '../organisms/sidebar/Sidebar'

const Main = (props)=>{
    return (
        <HashRouter>
            <Layout>
                <Sidebar />
                <Layout className="site-layout" backgroundColor='#F8F8F8'>
                    <Header className="site-layout-background" backgroundColor='#F8F8F8' />
                    <Content>
                        <Router />
                    </Content>  
                </Layout>
            </Layout>
        </HashRouter>
    )
}

export default Main