import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      {/* Left side of the navbar - Social Media Icons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right side of the navbar - Sections and Connect */}

      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* Connect button */}

      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  );
};

export default NavBar;
