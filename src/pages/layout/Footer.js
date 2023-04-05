import styled from "styled-components";

const Container = styled.div`
  background: #f7f6f5;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px 0px lightgray;
  width: 100%;
  box-sizing: border-box;
`;

const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <Container>
      <p>&copy;{getCurrentYear() || 2023} Kate Lloyd</p>
    </Container>
  );
};

export default Footer;
