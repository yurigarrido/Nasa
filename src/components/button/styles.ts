/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '../../../stitches.config';

export const Button = styled('button', {
	background: 'transparent',
	border: 'none',
	cursor: 'pointer',
	color: '$text',

	variants: {
		bold: {
			true: {
				fontWeight: 'bold',
				color: '#54B7DE',
			},
		},
	},

	'&:hover': {
		color: '$textHover',
		transition: '.3s ease',
	},
});
