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
