/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '../../../stitches.config';

export const Button = styled('button', {
	background: 'transparent',
	border: 'none',
	cursor: 'pointer',
	color: '$gray8',

	'&:hover': {
		color: '$gray9',
		transition: '.3s ease',
	},
});
