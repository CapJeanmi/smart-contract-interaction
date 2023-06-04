require('dotenv').config();
const ethers = require('ethers');

const contractABI = [
    {
      inputs: [],
      name: 'count',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'dec',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'get',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'inc',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
];

const provider = new ethers.AlchemyProvider(
    'sepolia',
    process.env.SEPOLIA_PRIVATE_KEY
);

const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);

async function main() 
{
    const counterContract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        contractABI,
        wallet
    );
  
    let counter = await counterContract.get();
    console.log(counter);
}

main();