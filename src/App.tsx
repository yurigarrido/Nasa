import {globalStyles} from '../stitches.config';
import {Router} from './routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
	globalStyles();
	return (
		<BrowserRouter>
			<Router/>
		</BrowserRouter>
	);
}

export default App;
