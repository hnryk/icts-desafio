import React from 'react'
import { Col } from 'antd'
import ConsumptionByTimeUnitCard from '../../components/molecules/cards/ConsumptionByTimeUnit'
import Card from '../../components/molecules/cards/Card'
import ServerCard from '../../components/organisms/server/ServerCard'
import GroupsCard from '../../components/organisms/groups/GroupsCard'
import DevicesCard from '../../components/organisms/devices/DevicesCard'
import NotificationCard from '../../components/organisms/notifications/NotificationCard'
import {Layout, Row} from './Home.style'
const Index = ()=> {
    const colProps = {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 8,
        xxl: 8
    }

    const consumptionByTimeUnit = [
        {
            leftText: 'Today', 
            rightText: '12:00 PM',
            content: "32.562 kWh",
            footer: "$ 35.492"
        },
        {
            leftText: 'Weekly', 
            rightText: 'Sunday',
            content: "83.139 kWh",
            footer: "$ 97.13"
        },
        {
            leftText: 'Monthly', 
            rightText: '10/01',
            content: "559.584 kWh",
            footer: "$ 640.81"
        },
        {
            leftText: 'Annual', 
            rightText: '01/01/2020',
            content: "11802.04 kWh",
            footer: "$ 13401.133"
        }
    ]

    return(
        <Layout>
            <Row gutter={[24, 24]}>
            {
                consumptionByTimeUnit.map(v=>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <ConsumptionByTimeUnitCard textHeader={{leftText: v.leftText, rightText: v.rightText}} content={v.content} footer={v.footer} />
                    </Col>
                )
            }
            </Row>
            <Row gutter={[24, 24]}>
                <Col {...colProps}>
                    <Card>
                        <ServerCard />
                    </Card>
                </Col>
                <Col {...colProps}>
                    <Card>
                        <DevicesCard />
                    </Card>
                </Col>
                <Col {...colProps}>
                    <Card>
                        <NotificationCard />
                    </Card>
                </Col>
                <Col {...colProps}>
                    <Card>
                        <GroupsCard />
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export default Index