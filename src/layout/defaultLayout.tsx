import {useState} from 'react';
import {Outlet} from 'react-router';
import {Container, Footer, Header} from './styles';
import {List, UserCircle} from 'phosphor-react';
import {Button} from '../components/button/styles';
import {Sidebar} from '../components/sidebar';
import {Logo} from '../assets';

export function DefaultLayout() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Container>
			<Header><Button onClick={() => {
				setMenuOpen(!menuOpen);
			}}><List size={32} /></Button><Logo/><UserCircle size={32} /></Header>
			<Sidebar open={menuOpen} close={() => {
				setMenuOpen(false);
			}}/>
			<Outlet/>
			<Footer>
      Desenvolvido por <strong>Yuri Garrido</strong>
			</Footer>
		</Container>);
}
