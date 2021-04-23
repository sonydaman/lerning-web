import React from "react";
import { Footer, Header } from "..";
import { Sidebar } from "../Sidebar";

export const PublicLayout = (props) => {

  return (
    <div className="public-layout">
      <Header />
      <div className="container">
            <div className="row">
                <div className="col-4"><Sidebar /></div>
                <div className="col-8">{props.children}</div>
            </div>
        </div>
        
      <Footer />
    </div>
  );
};
