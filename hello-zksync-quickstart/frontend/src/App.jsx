import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl mb-6 text-center text-blue-500">Crowdfund Contract</h1>
        <p className="text-xl mb-6 text-center">Total Funds Raised: <span className="font-bold text-green-500">0</span> Ether</p>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Contribution Amount</label>
          <input type="number" className="border-2 border-blue-500 rounded px-3 py-2 w-full outline-none" placeholder="Enter amount in Ether" />
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Contribute</button>
          <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">Withdraw Funds</button>
        </div>
      </div>
    </div>
  );
}

export default App;
