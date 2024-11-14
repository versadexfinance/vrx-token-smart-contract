// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title Official VersaX Token
/// @author https://www.versax.io
/// @dev OpenZeppelin - A library for secure smart contract development

contract VersaX is ERC20Burnable {
    /// @notice A constructor that mint the tokens
    constructor() ERC20("VersaX", "VRSX") {
        _mint(
            0xA225383f631B63b518Ce8919d9b47ebCD30788A5,
            800_000_000 * 10 ** decimals()
        );
    }
}
