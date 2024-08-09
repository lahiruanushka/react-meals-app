import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </main>
  );
}

export default App;
