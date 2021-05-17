import React, { useReducer } from "react";
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
import ProductsPage from "./Pages/ProductsPage";

import { SelectPage } from "./Pages/SelectPage";
import TabPage from "./Pages/TabPage";
import { CapsPage } from "./Pages/Caps Page";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/SigninPage";
import ShiftPage from "./Pages/ShiftPage";
import GayatriPage from "./Pages/GayatriPage";
import AltPage from "./Pages/AltPage";
import WindowPage from "./Pages/WindowPage";
import { initialState, LayoutReducer, useLayout } from "./hooks/LayoutHook";
import SchoolGalleryPage from "./Pages/SchoolGalleryPage";

export default function Router() {
  const publicRoute = [
                        {path:"/signin",component:<SigninPage />},
                        {path:"/contact",component:<ContactUsPage />},
                        {path:"/about",component:<AboutPage />},
                        {path:"/gallery",component:<GalleryPage />},
                        {path:"/profile",component:<ProfilePage />},
                        {path:"/main",component:<Main />},
                        {path:"/schoolGallery",component:<SchoolGalleryPage />} 
                      ];
  const privateRoute = [
    
    {path:"/about",component:<AboutPage />},
    {path:"/gallery",component:<GalleryPage />},
    {path:"/profile",component:<ProfilePage />} 
  ];
  // const [state, dispatch] = useReducer(LayoutReducer, initialState);
  // console.log(state);
  // const routes = state.isLoggedIn ? privateRoute : publicRoute
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          {
            publicRoute.map((item,index)=>{
              return (
                <Route key={index} path={item.path}>
                  {item.component}
                </Route>
              )
            })
          }
          {/* <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route> */}
          {/* <Route path="/academic">
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

          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/select">
            <SelectPage />
          </Route>
          <Route path="/tab">
            <TabPage />
          </Route>

          <Route path="/tab">
            <TabPage />
          </Route>

          <Route path="/caps">
            <CapsPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/shift">
            <ShiftPage />
          </Route>
          <Route path="/gayatri">
            <GayatriPage />
          </Route>

          <Route path="/alt">
            <AltPage />
          </Route>
          <Route path="/window">
            <WindowPage />
          </Route>


          <Route path="/">
            <Main />

          </Route>
         */}
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
}
