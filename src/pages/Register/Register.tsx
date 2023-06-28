import { useLocation } from "react-router-dom";
import HeaderRegister from "../../components/HeaderRegister";
import MenuRegister from "../../components/MenuRegister";
import PersonalData from "./Components/PersonalData";
import { Content, ContentDiv, Div, MenuDiv } from "./style";
import Adress from "./Components/Adress";
import Diversity from "./Components/Diversity";
import Contact from "./Components/Contact";
import Comments from "./Components/Comments";
import FooterRegister from "../../components/FooterRegister";

export default function Register() {
  const location = useLocation();

  const isPersonalDataPage = location.pathname === "/register";
  const isAdressPage = location.pathname === "/register/adress";
  const IsDiversity = location.pathname === "/register/diversity";
  const IsContact = location.pathname === "/register/contact";
  const IsComments = location.pathname === "/register/comments";

  return (
    <Div>
      <MenuDiv>
          <MenuRegister />
      </MenuDiv>
      <ContentDiv>
        <HeaderRegister />
        <Content>
          {isPersonalDataPage && <PersonalData />}
          {isAdressPage && <Adress />}
          {IsDiversity && <Diversity />}
          {IsContact && <Contact />}
          {IsComments && <Comments />}
          <FooterRegister />
        </Content>
      </ContentDiv>
    </Div>
  );
}
