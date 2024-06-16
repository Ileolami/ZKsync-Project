// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Define the contract
contract CrowdfundingCampaign {
    // Define state variables
    address public owner; // The address of the owner of the contract
    uint256 public fundingGoal; // The funding goal for the campaign
    uint256 public totalFundsRaised; // The total amount of funds raised
    mapping(address => uint256) public contributions; // A mapping to keep track of contributions by address

    // Define events
    event ContributionReceived(address contributor, uint256 amount); // Event for when a contribution is received
    event GoalReached(uint256 totalFundsRaised); // Event for when the funding goal is reached

    // Constructor function
    constructor(uint256 _fundingGoal) {
        owner = msg.sender; // Set the owner to the address that deployed the contract
        fundingGoal = _fundingGoal; // Set the funding goal to the passed in value
    }

    // Function to contribute to the campaign
    function contribute() public payable {
        require(msg.value > 0, "Contribution must be greater than 0"); // Ensure the contribution is greater than 0
        contributions[msg.sender] += msg.value; // Add the contribution to the sender's total contributions
        totalFundsRaised += msg.value; // Add the contribution to the total funds raised

        emit ContributionReceived(msg.sender, msg.value); // Emit the ContributionReceived event

        // If the total funds raised is greater than or equal to the funding goal, emit the GoalReached event
        if (totalFundsRaised >= fundingGoal) {
            emit GoalReached(totalFundsRaised);
        }
    }

    // Function to withdraw funds from the campaign
    function withdrawFunds() public {
        require(msg.sender == owner, "Only the owner can withdraw funds"); // Ensure only the owner can withdraw funds
        require(totalFundsRaised >= fundingGoal, "Funding goal not reached"); // Ensure the funding goal has been reached

        uint256 amount = address(this).balance; // Get the balance of the contract
        totalFundsRaised = 0; // Reset the total funds raised

        // Transfer the funds to the owner
        (bool success, ) = payable(owner).call{value: amount}("");
        require(success, "Transfer failed."); // Ensure the transfer was successful
    }

    // Function to get the total funds raised
    function getTotalFundsRaised() public view returns (uint256) {
        return totalFundsRaised;
    }

    // Function to get the funding goal
    function getFundingGoal() public view returns (uint256) {
        return fundingGoal;
    }
}
