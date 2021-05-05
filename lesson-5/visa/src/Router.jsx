import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Main, PublicLayout } from "./Components";
// import { Footer, Header } from "./components";
import { AboutPage, UsersPage, GalleryPage, AcademicPage, BooksPage, AchievementsPage, HomePage, ContactUsPage } from "./Pages";
import SigninPage from "./Pages/SigninPage";


export default function Router() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/academic">
            <AcademicPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/achievements">
            <AchievementsPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/contact">
            <ContactUsPage />
          </Route>

          <Route path="/">
            <Main />

          </Route>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
}
