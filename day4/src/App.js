import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Gallery from "./components/Gallery";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Gallery />
    </div>
  );
}

export default App;
