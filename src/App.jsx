import { useState, useEffect } from 'react'
import './App.css'
import ConnectBtn from './ConnectWallet';
import CrowdfundingCampaign from '../hello-zksync-quickstart/deployments-zk/zkSyncSepoliaTestnet/contracts/Crowdfund.sol/CrowdfundingCampaign.json';
import { ethers } from 'ethers';
import { Contract, BrowserProvider, Provider } from "zksync-ethers";
import Modal from './Modal';


function App() {
  const contractAddress = "0x7ce46142b7D1957bA83b94a4640fA0F231b58127";
  const [totalFundsRaised, setTotalFundsRaised] = useState(0);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [contract, setContract] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Message, setMessage] = useState(''); 
  const [title, setTitle] = useState('');

   // Function to initialize the provider and signer
  const initializeProviderAndSigner = async () => {
    try{
    //const provider = new Provider("https://sepolia.era.zksync.dev");
    // Note that we still need to get the Metamask signer
    const signer = await new BrowserProvider(window.ethereum).getSigner();
    const contractInstance = new Contract(contractAddress, CrowdfundingCampaign.abi, signer);
    setContract(contractInstance);
    console.log(contractInstance);
    fetchTotalFunds(contractInstance);
    }
    catch (error) {
      console.error(error);
    }
  };

  // Function to fetch total funds
  const fetchTotalFunds = async (x) => {
    if (x) {
      const total = await x.totalFundsRaised();
      setTotalFundsRaised(ethers.formatEther(total));
    }
  };

  useEffect(() => {
  
    initializeProviderAndSigner();
  }, []);
  
  // Function to contribute
  const contribute = async () => {
    if (contract) {
      try {
        const tx = await contract.contribute({ value: ethers.parseEther(contributionAmount).toString() });
        await tx.wait();
        const total = await contract.totalFundsRaised();
        setTotalFundsRaised(ethers.formatEther(total));
        setTitle('Success 🔔');
        setMessage('Thanks For Your Contribution🎉');
        setIsModalOpen(true);
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  // Function to withdraw funds
  const withdraw = async () => {
    if (contract) {
      try {
        const tx = await contract.withdrawFunds();
        await tx.wait();
        const total = await contract.totalFundsRaised();
        setTotalFundsRaised(ethers.formatEther(total));
        console.log(total)
        setTitle('Success 🔔');
        setMessage("Funds withdrawn successfully");
      } catch (error) {
        setTitle('Error ❌');
        setMessage(`${error.reason} 😞`); // set the error message
        setIsModalOpen(true);
      }
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10">
        <ConnectBtn />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={title} Message={Message} />
      <div className='flex items-center justify-center'>
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl mb-6 text-center text-blue-500">Crowdfund Contract</h1>
        <p className="text-xl mb-6 text-center">Total Funds Raised: <span className="font-bold text-green-500">{totalFundsRaised}</span> Ether</p>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Contribution Amount</label>
          <input type="number" 
          value={contributionAmount}
          onChange={(e) => setContributionAmount(e.target.value)}
          className="border-2 border-blue-500 rounded px-3 py-2 w-full outline-none" 
          placeholder="Enter amount in Ether" 
          />
        </div>
        <div className="flex justify-between">
          <button 
          onClick={contribute}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Contribute</button>
          <button 
          onClick={withdraw}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">Withdraw Funds</button>
        </div>
      </div>
    </div>
    </main>
  );
}

export default App;
