import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import { Footer, Header } from "..";
import { LayoutProvider,LayoutReducer,initialState } from "../../hooks/LayoutHook";
import { Sidebar } from "../Sidebar";

export const PublicLayout = (props) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);
  const click = () => {
    dispatch({type:'increment'})
  }
  return (
    <div className="public-layout">
      <LayoutProvider value={{state,dispatch}}>
        <Header />
        <Button onClick={click}>Click</Button>
        <div className="container-fluid">
              <div className="row">
                  <div className="col-2"><Sidebar /></div>
                  <div className="col-8">{props.children}</div>
              </div>
          </div>
          
        <Footer />
      </LayoutProvider>
    </div>
  );
};
