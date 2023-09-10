/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '@stitches/react';

export const Container = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexDirection: 'column',

});

export const Header = styled('header', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '$8',

	color: '$red1',

	fontWeight: 'bold',
	fontSize: '$4xl',
});

export const Main = styled('main', {

	height: '100%',

	maxWidth: '768px',

	marginBottom: '$80',

	background: '$gray1',

	margin: '$8',

	'& > div': {
		padding: '$8',

	},

	borderRadius: '$md',
	overflow: 'hidden',

});

export const Footer = styled('footer', {

	width: '100%',

	color: '$white',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '$8',

	strong: {
		marginLeft: '$4',
		color: '$blue2',
		fontWeight: 'bold',
		fontSize: '$4xl',
	},

});

export const DateContainer = styled('div', {
	display: 'flex',
	alignItems: 'baseline',
	flexWrap: 'wrap',
	gap: '$4',
});

export const Button = styled('button', {
	background: 'transparent',
	border: 'none',
	cursor: 'pointer',
	color: '$gray7',

	'&:hover': {
		color: '$gray9',
		transition: '.3s ease',
	},
});
