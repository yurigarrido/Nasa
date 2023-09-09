import { styled } from "@stitches/react";

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  // alignItems: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, rgba(2,0,36,1) 22%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)',

  height: '100vh',
  width: '100vw',

})

export const Header = styled('header', {
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  padding: '$8',

  color: '$red1',

  fontWeight: 'bold',
  fontSize: '$4xl',
})

export const Main = styled('main', {
  color: '#fff',

  height: '100%',

  marginBottom: '$80',

  background: '$gray1',

  padding: '$8',
  margin: '$8',

  borderRadius: '$md'

})

export const Footer = styled('footer', {


  width: '100%',

  color: '$white',
 
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  padding: '$8',

  strong: {
    marginLeft: '$4',
    color: '$blue2',
    fontWeight: 'bold',
    fontSize: '$4xl',
  }

})