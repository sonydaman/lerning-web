import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;