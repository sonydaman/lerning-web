import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
