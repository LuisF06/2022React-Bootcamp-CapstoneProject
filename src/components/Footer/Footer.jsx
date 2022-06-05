import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 50px;
  background: #000000;
  color: rgb(255, 255, 255);
`;

const Footer = () => {
  return (
    <>
      <FooterDiv id="footer">Ecommerce created during Wizeline’s Academy React Bootcamp</FooterDiv>
    </>
  );
};

export default Footer;