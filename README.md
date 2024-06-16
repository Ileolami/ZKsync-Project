# HOW TO CREATE CROWDFUNDING DAPP USING zkSYNC PRE WRITTEN SMART CONTRACT

## TABLE OF CONTENTS

1. Introduction

2. How to install zkSync

3. How to deploy the smart contract on zkSYNC

4. How to create the application UI

5. How to integrate the smart contract with frontend

## Prerequisites

1. You have must have knowledge in React.js or any other js framework or library

2. You have must have a Code editor installed such as VScode

## Technologies needed

1. Node.js

2. Ether.js

3. React.js or any other JavaScript framework or library

4. Metamask wallet

5. Private key

6. [zkSync sepolia faucet](https://docs.zksync.io/build/zksync-101#fund-your-wallet)

7. TailwindCSS or any other CSS framework or library for styling purposes

### Introduction

zkSync Era is a ZK rollup, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum. In zkSync Era, computation is performed off-chain and most data is stored off-chain as well. As all transactions are proven on the Ethereum mainchain, users enjoy the same security level as in Ethereum. [Learn More](https://ileolami.hashnode.dev/deep-dive-into-zksync-protocol#heading-an-overview-of-zksync)

## How to install zkSync

1. Run this command in your terminal

For Hardhat 👇

```shell
npx zksync-cli@latest create --template qs-hello-zksync hello-zksync-quickstart
cd hello-zksync-quickstart

For foundry

```shell
npx zksync-cli@latest create --template qs-fs-hello-zksync hello-zksync-foundry-quickstart
cd hello-zksync-foundry-quickstart


Use this video as a guide 
[![Watch the video](https://go.screenpal.com/watch/cZ1DFNVNdQI)](https://go.screenpal.com/watch/cZ1DFNVNdQI)
