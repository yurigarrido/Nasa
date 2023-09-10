/* eslint-disable @typescript-eslint/naming-convention */
import { styled } from '../../../stitches.config'
import { shimmerAnimation } from '../../components/shimmer'

export const List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  paddingLeft: '$6',

  borderLeft: '1px solid white',
})

export const Container = styled('div', {
  margin: '$8',
})

export const Period = styled('h2', {
  color: '$blue1',
  marginLeft: '-20px',

  fontStyle: 'italic',

  padding: '$8 $4',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const FeedTitle = styled('h2', {
  fontStyle: 'italic',
  color: '$blue1',

  padding: '$8 $4',
  marginLeft: '-20px',
})

export const PeriodShimmer = styled('div', {
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray3',
  width: '20rem',
  height: '2rem',
  borderRadius: '$md',

  marginLeft: '-80px',

  margin: '$8',
  padding: '$8',

  '@mobile': {
    width: '250px',
  },
})

export const CardShimmer = styled('div', {
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  width: '52rem',
  height: '12rem',
  borderRadius: '$md',

  padding: '$8',

  '@mobile': {
    width: '90%',
  },
})
