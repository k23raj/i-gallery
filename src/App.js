import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import UnsplashImages from "./components/UnsplashImages";

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Loader></Loader>
      <UnsplashImages></UnsplashImages>
    </div>
  );
}

export default App;
