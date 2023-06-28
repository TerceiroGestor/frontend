import { useLocation, useNavigate } from "react-router-dom";
import { Buttons, ClearButton, ContinueButton } from "./style";
import { CaretLeft } from "phosphor-react";

export default function FooterRegister() {
  const navigate = useNavigate()
  const location = useLocation()
  const isPersonalDataPage = location.pathname !== "/register";
  return(
    <Buttons isActive={isPersonalDataPage}>
       {isPersonalDataPage && <CaretLeft type="button" onClick={() => navigate(-1)} size={40}>Voltar</CaretLeft> }
       <div>
          <ClearButton>Limpar</ClearButton>
          <ContinueButton>Continuar</ContinueButton>
       </div>
    </Buttons>
  )

}