/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '../../../stitches.config';
import * as Portal from '@radix-ui/react-portal';
export const Container = styled(Portal.Root, {
	height: '100%',
	width: '100vw',
	background: 'rgba(0, 0, 0, 0.133)',

	position: 'fixed',
	top: '0',
	zIndex: '$portal',
	opacity: '1',

	display: 'flex',
	flexDirection: 'row',
	alignContent: 'center',
});

