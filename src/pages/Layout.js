import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

const Margins = styled.div`
  margin: 0 5rem;
`;

const Layout = () => {
  return (
    <>
      <Nav />
      <Margins>
        <Outlet />
      </Margins>
      <Footer />
    </>
  );
};

export default Layout;
