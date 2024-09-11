// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DrugSupplyChain {
    
    struct Drug {
        string name;
        string batchNumber;
        uint256 quantity;
        string status; // produced, shipped, received, used
        address currentHolder;
        uint256 timestamp;
    }

    mapping (string => Drug) public drugRecords; // Mapping batch number to Drug details

    event DrugProduced(string batchNumber, uint256 quantity, address indexed producer);
    event DrugShipped(string batchNumber, address indexed sender, address indexed receiver);
    event DrugReceived(string batchNumber, address indexed receiver);
    event DrugUsed(string batchNumber, address indexed user);

    // Produce drugs and add them to the system
    function produceDrug(string memory _name, string memory _batchNumber, uint256 _quantity) public {
        require(_quantity > 0, "Quantity must be greater than zero");
        drugRecords[_batchNumber] = Drug({
            name: _name,
            batchNumber: _batchNumber,
            quantity: _quantity,
            status: "Produced",
            currentHolder: msg.sender,
            timestamp: block.timestamp
        });

        emit DrugProduced(_batchNumber, _quantity, msg.sender);
    }

    // Ship drugs to the next party
    function shipDrug(string memory _batchNumber, address _receiver) public {
        Drug storage drug = drugRecords[_batchNumber];
        require(drug.quantity > 0, "Drug not found or invalid");
        require(keccak256(bytes(drug.status)) == keccak256(bytes("Produced")) || keccak256(bytes(drug.status)) == keccak256(bytes("Received")), "Drug cannot be shipped");
        require(drug.currentHolder == msg.sender, "You are not the current holder");

        drug.status = "Shipped";
        drug.currentHolder = _receiver;
        drug.timestamp = block.timestamp;

        emit DrugShipped(_batchNumber, msg.sender, _receiver);
    }

    // Receive drugs at the destination
    function receiveDrug(string memory _batchNumber) public {
        Drug storage drug = drugRecords[_batchNumber];
        require(drug.quantity > 0, "Drug not found or invalid");
        require(keccak256(bytes(drug.status)) == keccak256(bytes("Shipped")), "Drug cannot be received");
        require(drug.currentHolder == msg.sender, "You are not the intended recipient");

        drug.status = "Received";
        drug.timestamp = block.timestamp;

        emit DrugReceived(_batchNumber, msg.sender);
    }

    // Use drugs (consume them)
    function useDrug(string memory _batchNumber) public {
        Drug storage drug = drugRecords[_batchNumber];
        require(drug.quantity > 0, "Drug not found or invalid");
        require(keccak256(bytes(drug.status)) == keccak256(bytes("Received")), "Drug cannot be used");
        require(drug.currentHolder == msg.sender, "You are not the current holder");

        drug.status = "Used";
        drug.timestamp = block.timestamp;

        emit DrugUsed(_batchNumber, msg.sender);
    }

    // Fetch drug details
    function getDrugInfo(string memory _batchNumber) public view returns (string memory name, string memory batch, uint256 quantity, string memory status, address holder, uint256 time) {
        Drug storage drug = drugRecords[_batchNumber];
        return (drug.name, drug.batchNumber, drug.quantity, drug.status, drug.currentHolder, drug.timestamp);
    }
}
