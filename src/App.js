import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useParams,
} from "react-router-dom";
import NavOne from "./components/NavOne";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context";
import Secondary from "./pages/Secondary";
import { useEffect } from "react";

function App() {
  const { pageName } = useGlobalContext();

  return (
    <>
      <Router>
        <NavOne />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path={pageName} exact>
            <Secondary />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
