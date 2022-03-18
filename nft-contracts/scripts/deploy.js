const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL to extract the metadata for Antiparallel NFTs
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of Antiparallel contract.
  */
  const antiparallelContract = await ethers.getContractFactory("Antiparallel");

  // deploy the contract
  const deployedAntiparallelContract = await antiparallelContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Antiparallel Contract Address:",
    deployedAntiparallelContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
