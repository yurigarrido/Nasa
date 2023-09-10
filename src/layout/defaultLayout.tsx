import { useState } from 'react'
import { Outlet } from 'react-router'
import { Container, Footer, Header } from './styles'
import { List } from 'phosphor-react'
import { Button } from '../components/button/styles'
import { Sidebar } from '../components/sidebar'
import { Logo } from '../assets'
import { ThemeSwitch } from '../components/themeSwitch'

export function DefaultLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
      <Header>
        <Button
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <List size={32} />
        </Button>
        <Logo />
        <ThemeSwitch />
      </Header>
      <Sidebar
        open={menuOpen}
        close={() => {
          setMenuOpen(false)
        }}
      />
      <Outlet />
      <Footer>
        Desenvolvido por <strong>Yuri Garrido</strong>
      </Footer>
    </Container>
  )
}
