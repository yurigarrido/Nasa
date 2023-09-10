import {keyframes} from '../../stitches.config';

export const shimmerAnimation = keyframes({
	'from, 100%': {
		opacity: 1,
	},
	'50%': {
		opacity: 0.4,
	},
});
