import { Doughnut } from 'react-chartjs-2'

const Index = (props)=> {
    const options = {
        legend: {
            display: false,
            position: 'left'
        }
    }

    return (
        <Doughnut data={props.data} />  
    )
}

export default Index