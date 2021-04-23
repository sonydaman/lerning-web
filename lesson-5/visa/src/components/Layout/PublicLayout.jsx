import React from "react";
import { Footer, Header } from "..";

export const PublicLayout = (props) => {

  return (
    <div className="public-layout">
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};
