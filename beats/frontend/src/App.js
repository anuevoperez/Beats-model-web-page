import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import logo from ".//assets/logo.png";
import Home from "./sections/Home/Home";
import Info from "./sections/Info/Info";
import Models from "./sections/Models/Models";
import NewsLetter from "./sections/NewsLetter/NewsLetter";
import WITB from "./sections/WITB/WITB";
function App() {

 

  return (

    <div className={styles.App} id="home">
      <NavBar logo={logo} alt="Logo" />
      <Home/>
      <Info/>
      <WITB/>
      <Models/>
      <NewsLetter/>
    </div>
  );
}

export default App;
