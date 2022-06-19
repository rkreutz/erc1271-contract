// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract BooleanSignatureChecker {

    bytes4 constant internal MAGICVALUE = 0x1626ba7e;
    address private _signer;

    constructor(address signer) {
        _signer = signer;
    }
    
    function isValidSignature(bytes32 hash, bytes memory signature) external view returns (bool) {
        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            r := mload(add(signature, 32))
            s := mload(add(signature, 64))
            v := and(mload(add(signature, 65)), 255)
        }
        if (v < 27) v += 27;
        address signer = ecrecover(hash, v, r, s);
        return signer == _signer;
    }

    function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
        return interfaceID == MAGICVALUE;
    }
}