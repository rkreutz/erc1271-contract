require('dotenv').config();

const main = async () => {
    const Contract = await ethers.getContractFactory("BooleanSignatureChecker");
    const contract = await Contract.attach(process.env.BOOLEAN_CONTRACT_ADDRESS);

    const isValid = await contract.isValidSignature(
        '0xb7755e72da7aca68df7d5ed5a832d027b624d56dab707d2b5257bbfc1bc5d4fd', // Message hash
        '0x468732fa8210c6f8481a288a668bd6f40745e67c9640f82f7415b44e7ba280e13b6fce01acaaa4ab2fe8620a179ca99960620a014fdf74d9cf828912811c1b821b' // signature
    ); 
    if (isValid === true) {
        console.log('Valid signature');
    } else {
        console.log('Invalid signature');
    }
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

