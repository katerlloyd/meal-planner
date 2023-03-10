import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 1rem;
  width: 100%;
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
