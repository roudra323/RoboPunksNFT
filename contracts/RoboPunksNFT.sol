/**

@title RoboPunksNFT
@dev A contract for RoboPunks NFT collection.
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoboPunksNFT is ERC721, Ownable {
uint256 public mintPrice;
uint256 public totalSupply;
uint256 public maxSupply;
uint256 public maxPerWallet;
bool public isPublicMintEnabled;
string internal baseTokenURI;
address payable public withdrawWallet;
mapping(address => uint256) public walletMints;
constructor() payable ERC721("RoboPunks", "RP") {
    mintPrice = 0.02 ether;
    totalSupply = 0;
    maxSupply = 1000;
    maxPerWallet = 3;
    //set withdraw wallet address
}

/**
 * @dev Set whether public minting is enabled or not.
 * @param isPublicMintEnabled_ True if public minting is enabled, false otherwise.
 */
function setIsPublicMintEnabled(bool isPublicMintEnabled_)
    external
    onlyOwner
{
    isPublicMintEnabled = isPublicMintEnabled_;
}

/**
 * @dev Set the base URI of the tokenURI.
 * @param baseTokenURI_ The base URI of the tokenURI.
 */
function setBaseTokenURI(string calldata baseTokenURI_) external onlyOwner {
    baseTokenURI = baseTokenURI_;
}

/**
 * @dev Returns the tokenURI of a given tokenId.
 * @param tokenId_ The tokenId of the tokenURI.
 * @return The tokenURI of the given tokenId.
 */
function tokenURI(uint256 tokenId_)
    public
    view
    override
    returns (string memory)
{
    require(_exists(tokenId_), "Token does not exist!");
    return
        string(
            abi.encodePacked(
                baseTokenURI,
                Strings.toString(tokenId_),
                ".json"
            )
        );
}

/**
 * @dev Withdraw the contract's balance to a given wallet.
 */
function withdraw() external onlyOwner {
    (bool success, ) = withdrawWallet.call{value: address(this).balance}(
        ""
    );
    require(success, "withdraw failed");
}

/**
 * @dev Mint a given quantity of NFTs to the sender.
 * @param quantity_ The quantity of NFTs to be minted.
 */
function mint(uint256 quantity_) public payable {
    require(isPublicMintEnabled, "minting is not enabled");
    require(msg.value == quantity_ * mintPrice, "wrong mint value");
    require(totalSupply + quantity_ <= maxSupply, "nft sold out");
    require(
        walletMints[msg.sender] + quantity_ <= maxPerWallet,
        "excess max wallet"
    );

    for (uint256 i = 0; i < quantity_; i++) {
        uint256 newTokenId = totalSupply + 1;
        totalSupply++;
        _safeMint(msg.sender, newTokenId);
    }
}
}
