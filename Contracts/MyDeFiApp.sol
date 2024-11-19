// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyDeFiApp is ERC20 {
    constructor() ERC20("MyDeFiToken", "MDT") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
