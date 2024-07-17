import { styled } from "styled-components";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import logo from "../../assets/logo.png";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 2rem;
  box-sizing: border-box;
  border-top: 4px solid var(--color-blue);
  box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

function Footer() {
  return (
    <StyledFooter className="container">
      <img src={logo} alt="Logo" />
    </StyledFooter>
  );
}

export default Footer;
