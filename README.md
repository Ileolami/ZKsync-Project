# HOW TO CREATE CROWDFUNDING DAPP USING zkSYNC PRE WRITTEN SMART CONTRACT

## TABLE OF CONTENTS

1. [Introduction](#introduction)

2. [How to install zkSync](#how-to-install-zksync)

3. [How to compile the smart contract](#how-to-compile-the-smart-contract)

4. [How to deploy the smart contract on zkSYNC](#how-to-deploy-the-smart-contract-on-zksync)

5. [How to create the application UI](#how-to-create-the-application-ui)

6. [How to integrate the smart contract with frontend](#how-to-integrate-the-smart-contract-with-frontend)

### Prerequisites

1. You have must have knowledge in React.js or any other js framework or library

2. You have must have a Code editor installed such as VScode

### Technologies needed

1. Node.js

2. Ether.js

3. React.js or any other JavaScript framework or library

4. Metamask wallet

5. Private key

6. [zkSync sepolia faucet](https://docs.zksync.io/build/zksync-101#fund-your-wallet)

7. TailwindCSS or any other CSS framework or library for styling purposes

## Introduction

zkSync Era is a ZK rollup, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. In zkSync Era, computation is performed off-chain and most data is stored off-chain as well. As all transactions are proven on the Ethereum mainchain, users enjoy the same security level as in Ethereum. [Learn More](https://ileolami.hashnode.dev/deep-dive-into-zksync-protocol#heading-an-overview-of-zksync)

## How to install zkSync

```shell
npx zksync-cli@latest create --template qs-hello-zksync hello-zksync-quickstart
cd hello-zksync-quickstart
```

For Foundry, run this command in your terminal:

```shell
npx zksync-cli@latest create --template qs-fs-hello-zksync hello-zksync-foundry-quickstart
cd hello-zksync-foundry-quickstart
```

You will be asked to input your private key, grab the private key from your account and input it

Use this video as a guide:
[Watch the video](https://go.screenpal.com/watch/cZ1DFNVNdQI)

After a Successful installation, you will see the following file:

![Folder](Media/folder.png)

## How to compile the smart contract

To deploy the smart contract, run the following command:

For npm:

```shell
npm run compile
```

for yarn:

```shell
yarn compile
```

for pnpm:

```shell
pnpm run compile
```

for bun:

```shell
bun run compile
```

Use this video as guide:
[watch this video](https://go.screenpal.com/watch/cZ1DqsVNdI2)

After compilation, you see additional folder like this:

![Compile](Media/compile%20folder.png)

## How to deploy the smart contract on zkSYNC

## How to create the application UI

## How to integrate the smart contract with frontend
