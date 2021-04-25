import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { PublicLayout } from "./components";
// import { Footer, Header } from "./components";
import { AboutPage, HomePage, UsersPage } from "./Pages";

export default function Router() {
  return (
    <BrowserRouter>
        <PublicLayout>
            <Switch>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/users">
                <UsersPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            </Switch>
        </PublicLayout>
    </BrowserRouter>
  );
}
