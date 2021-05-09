import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Main, PublicLayout } from "./Components";
// import { Footer, Header } from "./components";
import { AboutPage, UsersPage, GalleryPage, AcademicPage, BooksPage, AchievementsPage, HomePage, ContactUsPage, ProductPage, } from "./Pages";
import BlogPage from "./Pages/BlogPage";
import FeaturePage from "./Pages/FeaturePage";
import SigninPage from "./Pages/SigninPage";
import KeyboardPage from "./Pages/KeyboardPage";
import InsertPage from "./Pages/InsertPage";
import UpdatePage from "./Pages/UpdatePage";
import DeletePage from "./Pages/DeletePage";
import ProductsPage, { productspage } from "./Pages/ProductsPage";
import { SelectPage } from "./Pages/SelectPage";

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
          <Route path="/blog">
            <BlogPage />
          </Route>

          <Route path="/feature">
            <FeaturePage />
          </Route>
          <Route path="/keyboard">
            <KeyboardPage />
          </Route>
          <Route path="/insert">
            <InsertPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/select">
            <SelectPage />
          </Route>



          <Route path="/">
            <Main />

          </Route>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
}
