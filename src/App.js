import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/templates/Main'

const App = ()=> {
	return (
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	)
}

export default App
