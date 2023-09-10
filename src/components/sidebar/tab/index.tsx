import {Button} from '../../button/styles';

type TabProps = {
	title: string;
	path: string;
};

export const Tab = ({title}: TabProps) => <Button>{title}</Button>;
