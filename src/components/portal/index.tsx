import { Container } from './styles'
type PortalContainerProps = {
  children: React.ReactNode
  open: boolean
}
export const PortalContainer = ({ children, open }: PortalContainerProps) => {
  if (open) {
    return <Container>{children}</Container>
  }

  return <></>
}
