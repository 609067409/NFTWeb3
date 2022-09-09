async function main() {
  // Grab the contract factory 
  const Czy = await ethers.getContractFactory("Czy");

  // Start deployment, returning a promise that resolves to a contract object
  const CzyNFT = await Czy.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", CzyNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });