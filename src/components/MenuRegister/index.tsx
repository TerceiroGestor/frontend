import { NavLink } from "react-bootstrap";
import { Circle, Link, Nav } from "./style";
import { Div } from "./style";

export default function MenuRegister() {
  return(
    <Nav>
      <img src="../../public/images/background.png" alt="Terceiro Gestor" />
      <Div>
        <Circle />
        <Link href="/register">Dados pessoais</Link>
      </Div>
      <Div>
        <Circle />
        <Link href="/register/adress">Endereço</Link>
      </Div>
      <Div>
        <Circle />
        <Link href="/register/diversity">Diversidade</Link>
      </Div>
      <Div>
        <Circle />
        <Link href="/register/contact">Contato</Link>
      </Div>
      <Div>
        <Circle />
        <Link href="/register/comments">Oberservações</Link>
      </Div>
    </Nav>
  )
}