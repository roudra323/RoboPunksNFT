import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import roboPunksNFT from "../../artifacts/contracts/RoboPunksNFT.sol/RoboPunksNFT.json";

const roboPunkNFTAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          roboPunkNFTAddress,
          roboPunksNFT.abi,
          signer
        );
        const transaction = await contract.mint(BigNumber.from(mintAmount));
        await transaction.wait();
        console.log("Minted successfully\ntransaction: ", transaction);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <h1>Mint</h1>
      <p>
        RoboPunks are randomly generated RoboPunk characters stored on chain.
        Mint one today!
      </p>
      <div>
        <input
          type="number"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
        />
        <button onClick={handleMint}>Mint</button>
      </div>
    </div>
  );
};
