import {Route, Switch as SwitchRD} from "react-router-dom"
import Home from './pages/home/Home'
import Devices from './pages/Devices'
import Groups from './pages/Groups'
import Comparative from './pages/Comparative'
import Reports from './pages/Reports'

const Router = () =>{
    return (
        <SwitchRD>
            
            <Route path='/devices' children={<Devices />} />  
            <Route path='/groups' children={<Groups />} />  
            <Route path='/comparative' children={<Comparative />} /> 
            <Route path='/reports' children={<Reports />} />  
            <Route path='/' children={<Home />} /> 
        </SwitchRD>
    )
}

export default Router