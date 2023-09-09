import { Logo } from "../../assets";
import { Container, Header, Footer, Main } from "./styles";

export function Home() {
  return (<Container>
    <Header><Logo/></Header>
    <Main>
      main
    </Main>
    <Footer>
      Desenvolvido por <strong>Yuri Garrido</strong>
    </Footer>
  </Container>)
}