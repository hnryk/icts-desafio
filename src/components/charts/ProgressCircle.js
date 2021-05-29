import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const Index = ()=> {
    return (
        <CircularProgressbar 
            value={50} 
            text='50%' 

            styles={buildStyles({
                textSize: '16px',
                textColor: '#222222',
                trailColor: '#E1E1E1',
                backgroundColor: 'white',
                pathColor: '#630028',
            })}
        />
    )
}

export default Index