import { useState } from "react";
import "./App.css";
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";

function App() {
  const [accounts, setAccounts] = useState([]); // account address

  return (
    <div className="App">
      <NavBar account={accounts} setAccount={setAccounts} />
      <MainMint account={accounts} setAccount={setAccounts} />
    </div>
  );
}

export default App;
