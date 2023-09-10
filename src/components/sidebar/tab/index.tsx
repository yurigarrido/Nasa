import {useLocation, useNavigate} from 'react-router';
import {Button} from '../../button/styles';

type TabProps = {
	title: string;
	path: string;
	close: () => void;
};

export const Tab = ({title, path, close}: TabProps) => {
	const {pathname} = useLocation();
	const navigate = useNavigate();
	return <Button bold={pathname.includes(path)} onClick={() => {
		close();
		navigate(path);
	}}>{title}</Button>;
};
