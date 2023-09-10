import {useNavigate} from 'react-router';
import {Button} from '../../button/styles';

type TabProps = {
	title: string;
	path: string;
	close: () => void;
};

export const Tab = ({title, path, close}: TabProps) => {
	const navigate = useNavigate();
	return <Button onClick={() => {
		close();
		navigate(path);
	}}>{title}</Button>;
};
