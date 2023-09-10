import {useNavigate} from 'react-router';
import {Button} from '../../button/styles';

type TabProps = {
	title: string;
	path: string;
};

export const Tab = ({title, path}: TabProps) => {
	const navigate = useNavigate();
	return <Button onClick={() => {
		navigate(path);
	}}>{title}</Button>;
};
