import React from "react";
import { Footer, Header } from "..";
import { Sidebar } from "../Sidebar";

export const PublicLayout = (props) => {

  return (
    <div className="public-layout">
      <Header />
        {props.children}
      <Sidebar />
      <Footer />
    </div>
  );
};
