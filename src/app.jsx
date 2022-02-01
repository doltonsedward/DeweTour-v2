import Router from "preact-router";
import Home from "./presentation/pages/Home";

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default App;
