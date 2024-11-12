// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title Official VersaX Token
/// @author https://www.versax.io
/// @dev OpenZeppelin - A library for secure smart contract development

contract VersaX is ERC20Burnable {
    /// @notice A constructor that mint the tokens
    constructor() ERC20("VersaX", "VRX") {
        _mint(
            0x476b80E71a6dD331D3a0Be3262CEF603E582d5db,
            800_000_000 * 10 ** decimals()
        );
    }
}