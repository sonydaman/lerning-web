import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Main, PublicLayout } from "./components";
// import { Footer, Header } from "./components";
import { AboutPage, UsersPage, GalleryPage, AcademicPage, BooksPage, AchievementsPage } from "./Pages";


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

          <Route path="/main">
            <Main />

          </Route>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
}
