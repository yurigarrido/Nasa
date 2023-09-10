/* eslint-disable @typescript-eslint/naming-convention */

import { styled } from '../../../stitches.config'
import { shimmerAnimation } from '../../components/shimmer'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
})

export const Content = styled('div', {
  background: '$card',
  color: '$cardText',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$8',

  color: '$red1',

  fontWeight: 'bold',
  fontSize: '$4xl',

  width: '100%',
  borderBottom: '.5px solid $gray6',
})

export const SidebarLeft = styled('nav', {
  borderRight: '.5px solid $gray6',
  width: '380px',
  height: '100%',

  position: 'fixed',
  left: '0',

  background: '#2F4858',
})

export const Main = styled('main', {
  height: '100%',

  maxWidth: '768px',

  marginBottom: '$80',

  background: '$gray1',

  margin: '$8',

  '& > div': {
    padding: '$8',
  },

  img: {
    cursor: 'pointer',
    margin: '$8 0',

    background: '$gray3',
  },

  borderRadius: '$md',
  overflow: 'hidden',
})

export const DateContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: '$4',
})

export const Card = styled('div', {
  marginTop: '$8',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  width: '768px',
  borderRadius: '$md',

  padding: '$8',

  '@mobile': {
    width: '250px',
  },
})

export const DateShimmer = styled('div', {
  width: '30rem',
  height: '4rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray3',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const Title = styled('div', {
  width: '50rem',
  height: '4rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray3',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const ImageShimmer = styled('div', {
  width: '100%',
  height: '50rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray3',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const Description = styled('div', {
  width: '100%',
  height: '15rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray3',
  borderRadius: '$md',
})
