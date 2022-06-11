import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 50px;
  background: #D0C9C0;
  color: #000000;
`;

const Footer = () => {
  return (
    <>
      <FooterDiv id="footer">Ecommerce created during Wizeline’s Academy React Bootcamp</FooterDiv>
    </>
  );
};

export default Footer;
