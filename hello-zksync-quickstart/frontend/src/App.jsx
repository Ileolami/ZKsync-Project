import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-3xl mb-6 text-center">Crowdfund Contract</h1>
        <p className="text-xl mb-6 text-center">Total Funds Raised: <span className="font-bold">0</span> Ether</p>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Contribution Amount</label>
          <input type="number" className="border-2 border-gray-200 rounded px-3 py-2 w-full outline-none" placeholder="Enter amount in Ether" />
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Contribute</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Withdraw Funds</button>
        </div>
      </div>
    </div>
  );
}

export default App;
