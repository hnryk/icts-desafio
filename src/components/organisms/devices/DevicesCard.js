import React from 'react'
import Typography from '../../atoms/Typography'
import Doughnut from '../../charts/Doughnut'
import {Content} from './DeviceCard.style'
const DevicesCard = ()=> {
    const data = {
        labels: ['Online', 'Offline', 'Registered', 'Not registered', 'Setted', 'Manually setted', 'Unconfigured'],
        datasets: [
            {
                label: '# of Votes',
                data: [120, 62, 250, 32, 61, 115, 0],
                backgroundColor: [
                    '#C5004F',
                    '#630028',
                    '#222222',
                    '#707070',
                    '#B3B3B3',
                    '#E6E6E6',
                    '#F8F8F8'
                ],
                borderWidth: 1,
            }
        ]
    }
    return (
        <>
            <Typography type='title' level={5} bold>Devices</Typography>
            <Content>
                <Doughnut data={data}/>
            </Content>
        </>
    )
}

export default DevicesCard