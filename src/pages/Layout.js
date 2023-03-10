import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
