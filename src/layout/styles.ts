/* eslint-disable @typescript-eslint/naming-convention */

import { styled } from '../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',

  height: '100%',
  width: '100%',

  minHeight: '100vh',

  backgroundColor: '$background',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$8',

  fontWeight: 'bold',
  fontSize: '$4xl',

  width: '100%',

  background: '$header',
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

  borderRadius: '$md',
  overflow: 'hidden',
})

export const Footer = styled('footer', {
  width: '100%',

  color: '$white',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$8',

  strong: {
    marginLeft: '$4',
    color: '$text',
    fontWeight: 'bold',
    fontSize: '$4xl',
  },
})

export const DateContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: '$4',
})

export const Button = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray7',

  '&:hover': {
    color: '$gray9',
    transition: '.3s ease',
  },
})
