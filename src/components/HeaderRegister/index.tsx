import { useNavigate, useLocation } from "react-router-dom";
import { Circle, Content, Div, Line } from "./style";

export default function HeaderRegister() {
  const location = useLocation();

  return (
    <Div>
      <Content> 
        <Circle isActive={location.pathname === '/register'} />
        <p>Dados Pessoais</p>
      </Content>
      <Line />
      <Content> 
        <Circle isActive={location.pathname === '/register/adress'} />
        <p>Endereço</p>
      </Content>
      <Line />
      <Content> 
        <Circle isActive={location.pathname === '/register/diversity'} />
        <p>Diversidade</p>
      </Content>
      <Line />
      <Content> 
        <Circle isActive={location.pathname === '/register/contact'}/>
        <p>Contato</p>
      </Content>
      <Line />
      <Content> 
        <Circle isActive={location.pathname === '/register/comments'}/>
        <p>Obersavações</p>
      </Content>
    </Div>
  );
}
