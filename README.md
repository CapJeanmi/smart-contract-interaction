# SEPOLIA INTERACTION WITH A SMART CONTRACT

It's a simple interaction with a smart contract in Sepolia Testnet.


## Getting Started

Clone this project to pull down some basic starter code.

After that cd into the base directory of the project and run `npm install` to download all the project dependencies.

## 1. Create a unique Alchemy API key

If you have not already done so, create a unique Alchemy API Mainnet key
for your project as [described here](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp).

## 2. Add your API key to as an environment variable for the project

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `SEPOLIA_PRIVATE_KEY` with your api key.

After, add the line: `CONTRACT_ADDRESS` with "0x707F8eCb1C8C5E2DDC43E75Ec9Cf09841C24a362".

And finally, add your wallet private key with the line `WALLET_PRIVATE_KEY`.

```sh
SEPOLIA_PRIVATE_KEY=YOUR_ALCHEMY_API_KEY
CONTRACT_ADDRESS=0x707F8eCb1C8C5E2DDC43E75Ec9Cf09841C24a362
WALLET_PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
```


**⚠️ Note**

> Your Alchemy API Mainnet Key is a sensitive piece of data. If we were\
> building an enterprise app to conquer the world we would never place\
> this sensitive data in the client code of our blockexplorer project that\
> could potentially be read by anyone.
>
> But hey, we're just learning this stuff right now, not conquering anything\
> yet! :-) It won't be the end of the world to put the Alchemy API key in our\
> front-end code for this project.

## 3. Test and check the resutls

`node index`

Running the command above will run the app.

[Sepolia](https://sepolia.etherscan.io/address/0x707f8ecb1c8c5e2ddc43e75ec9cf09841c24a362) you can check the contract that I deployed in Sepolia Testnet and interact with him with methods (.count, .inc, .get && .dec).

```sh
await counterContract.get();
```

Credits:
All the credits for Alchemy University, my work here was a bit ;)