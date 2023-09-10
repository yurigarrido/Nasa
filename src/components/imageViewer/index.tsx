import {X} from 'phosphor-react';
import {Button} from '../button/styles';
import {PortalContainer} from '../portal';
import {View} from './styles';

type ImageViewerProps = {
	src: string;
	open: boolean;
	close: () => void;
};

export const ImageViewer = ({src, close, open}: ImageViewerProps) => (
	<PortalContainer open={open}>
		<View>
			<Button onClick={close} title='close'>
				<X size={32} />
			</Button>
			<img src={src} alt='' />
		</View>
	</PortalContainer>
);
