import {Moon, Sun} from 'phosphor-react';
import {Button} from '../button/styles';
import {useLayoutContext} from '../../context/layoutContext';

export const ThemeSwitch = () => {
	const {changeTheme, theme} = useLayoutContext();

	return (
		<Button onClick={changeTheme}>
			{theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
		</Button>
	);
};
