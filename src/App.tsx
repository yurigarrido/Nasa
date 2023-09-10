import {globalStyles} from '../stitches.config';
import {Router} from './routes';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

function App() {
	globalStyles();
	return (
		<BrowserRouter>
			<Toaster/>
			<Router/>
		</BrowserRouter>
	);
}

export default App;
