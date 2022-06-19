require('dotenv').config();

const main = async () => {
    const Contract = await ethers.getContractFactory("SignatureChecker");
    const contract = await Contract.attach(process.env.CONTRACT_ADDRESS);

    const magicValue = await contract.isValidSignature(
        '0x37e8318107d45b7f3dad040f88faa7190c1ae0b9f7f676c0454ed42fa5375ea8', // Message hash
        '0x468732fa8210c6f8481a288a668bd6f40745e67c9640f82f7415b44e7ba280e13b6fce01acaaa4ab2fe8620a179ca99960620a014fdf74d9cf828912811c1b821b' // signature
    ); 
    if (magicValue == '0x1626ba7e') {
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

