import {X} from 'phosphor-react';
import {PortalContainer} from '../portal';
import {Menu, MenuHeader, TabsContainer} from './styles';
import {Button} from '../button/styles';
import {useOutsideClick} from '../../hooks/useOutsideClick';
import {tabs} from './constants';
import {Tab} from './tab';

type SidebarProps = {
	open: boolean;
	close: () => void;
};

export const Sidebar = ({open, close}: SidebarProps) => {
	const closeMenu = () => {
		setTimeout(() => {
			close();
		}, 290);
	};

	const ref = useOutsideClick(() => {
		if (open) {
			closeMenu();
		}
	});
	return (

		<PortalContainer open={open}>
			<Menu ref={ref} open={open}>
				<MenuHeader>
					<span>Nasa</span>
					<Button onClick={close}><X size={24 }/></Button>
				</MenuHeader>
				<TabsContainer>
					{tabs.map(tab => <Tab key={tab.id} title={tab.title} path={tab.id}/>)}
				</TabsContainer>
			</Menu>
		</PortalContainer>
	);
};
