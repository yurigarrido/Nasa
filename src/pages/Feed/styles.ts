/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '../../../stitches.config';

export const List = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',
	paddingLeft: '$6',

	borderLeft: '1px solid white',

});

export const Container = styled('div', {
	margin: '$8',

});

export const Period = styled('h2', {
	color: '$blue1',
	marginLeft: '-20px',

	fontStyle: 'italic',

	padding: '$8 $4',

	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',

});

export const FeedTitle = styled('h2', {
	fontStyle: 'italic',
	color: '$blue1',

	padding: '$8 $4',
	marginLeft: '-20px',

});
