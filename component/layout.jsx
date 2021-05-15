import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
