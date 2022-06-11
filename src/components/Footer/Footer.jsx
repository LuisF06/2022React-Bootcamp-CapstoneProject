import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 50px;
  background: #d0c9c0;
  color: #000000;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Footer = () => {
  return (
    <>
      <FooterDiv id="footer">
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </FooterDiv>
    </>
  );
};

export default Footer;
