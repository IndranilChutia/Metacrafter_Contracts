# ERROR HANDLING SMART CONTRACT

This Solidity program demonstrates the different error handling techniques in Solidity
## Description

This program is a smart contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract has3 functions: deposit, desposit2, checkNum which use require, revert, and assert statements respectively to handle errors.
## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., ErroHandling.sol). Copy and paste the following code into the file:

```javascript
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract ErrorHandling{

    // Require Statement
    function deposit() public payable{
        require(msg.value>=10 ether, "The amount should be greater than 10 Ether");
    }

    // Revert Statement
    function deposit2(uint _value) public pure{
        if (_value >= 100) {
            revert("You don't have enough Ether to add");
        }
    }

    // Assert statement

    uint public number;
    function checkNum() public view{
        assert(number==0);
    }
}

```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "ErrorHandling" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the available functions. Click on the "ErrorHandling" contract in the left-hand sidebar, and then click on the deposit() function to test the require statement. Execute different functions and try out the contract.

## Authors

Indranil Chutia  

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
