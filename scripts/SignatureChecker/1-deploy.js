require('dotenv').config();

const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory('SignatureChecker');
    const contract = await contractFactory.deploy(
        process.env.SIGNING_ADDRESS, // Signer
    );
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
  
runMain();