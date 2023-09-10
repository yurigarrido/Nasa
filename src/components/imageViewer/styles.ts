/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {styled} from '../../../stitches.config';
import {Button} from '../button/styles';

/* eslint-disable @typescript-eslint/naming-convention */
export const View = styled('div', {
	position: 'absolute',
	left: '0',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	gap: '$8',

	height: '100%',
	width: '100vw',
	background: 'rgba(0, 0, 0, .7)',

	padding: '$8',
	color: '$text',

	img: {
		position: 'relative',
	},

	[`${Button}`]: {
		position: 'fixed',
		top: '3em',
		right: '3rem',
		background: '$blue2',
		padding: '$2',
		borderRadius: '$lg',
		border: '1px solid $text',

		'&:hover': {
			background: '$blue3',
			transition: '.3s ease',
			border: '1px solid $text',
		},
	},

});
