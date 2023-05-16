# RoboPunksNFT

RoboPunksNFT is a simple NFT minting DApp built using Vite, React, Chakra UI, Ether.js, Hardhat, and Solidity. This DApp allows users to mint their own NFTs and view all the NFTs that have been minted on the Sepolia testnet.

## Getting Started

To get started with RoboPunksNFT, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/roudra323/RoboPunksNFT.git
```

2. Install the dependencies:

```bash
cd RoboPunksNFT
npm install
```
3. Compile the contract:

```bash
npx hardhat compile
```

4. Start the development server:

```bash
npm run dev
```

4. Visit http://localhost:5173 to view the DApp.

## Usage

To mint a new NFT, follow these steps:

1. Connect your wallet by clicking on the "Connect" button in the top-right corner of the page.

2. Determine how much nft u wanna mint . Adjust it using "+" and "-".

3. Click on the "Mint NFT" button to mint your NFT.

## Testing

To run the tests for the smart contract, follow these steps:

1. Start the Hardhat test network:

```bash
npx hardhat node
```

2. In a separate terminal window, deploy the smart contract to the test network:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Run the tests:

```bash
npx hardhat test
```

## Deployment

To deploy the DApp to a live network, follow these steps:

1. Set up a new network in the Hardhat config file (`hardhat.config.js`) by adding a new network object with the appropriate configuration.

2. Update the network name in the deployment script (`scripts/deploy.js`) to match the name of the new network.

3. Deploy the smart contract to the live network using the deployment script:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

4. Build the DApp:

```bash
npm run build
```

5. Deploy the DApp to a hosting service like Netlify or Vercel.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your changes:

```bash
git checkout -b my-new-feature
```

3. Make your changes and commit them:

```bash
git commit -m "Add some feature"
```

4. Push your changes to your fork:

```bash
git push origin my-new-feature
```

5. Create a pull request from your fork to the main repository.

## Live site : https://robopunksnft323.netlify.app/
