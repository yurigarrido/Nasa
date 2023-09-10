/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { keyframes, styled } from '../../../stitches.config'

const SlideIn = keyframes({
  from: { left: '-500px' },
  to: { left: '0px' },
})

const SlideOut = keyframes({
  from: { left: '0px' },
  to: { left: '-500px', display: 'none' },
})

export const Menu = styled('div', {
  position: 'absolute',
  left: '0',

  display: 'flex',
  flexDirection: 'column',

  gap: '$8',

  height: '100%',
  background: '$sidebar',

  width: '40rem',

  padding: '$8',
  color: '$text',

  '@mobile': {
    width: '100vw',
  },

  variants: {
    open: {
      true: {
        animation: `${SlideIn} .5s ease`,
      },
      false: {
        animation: `${SlideOut} .5s ease`,
      },
    },
  },
})

export const TabsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$8',
})

export const MenuHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
