/** LIBRARIES */
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

/** FUNCTIONS */

// Returns the merkle tree structure object
//
// Params
// whitelistAddresses: List of addresses
function getMerkleTree(whitelistAddresses) {
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
    
    return merkleTree;
}

// Returns the merkle tree root hash object
//
// Params
// whitelistAddresses: List of addresses
function getRootHash(whitelistAddresses) {
    const merkleTree = getMerkleTree(whitelistAddresses);
    const rootHash = merkleTree.getRoot();

    return rootHash;
}

// Returns the merkle tree structure as a 
// string from a list of addresses
//
// Params
// whitelistAddresses: List of addresses
function getMerkleTreeString(whitelistAddresses) {
    const merkleTree = getMerkleTree(whitelistAddresses);
      
    return merkleTree.toString();
}

// Returns the merkle root tree hash as a 
// string from a list of addresses
//
// Params
// whitelistAddresses: List of addresses
function getRootHashString(whitelistAddresses) {
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
    
    const rootHash = merkleTree.getRoot();
    return rootHash.toString('hex');
}

/** EXPORTS */

module.exports = {
    getMerkleTree,
    getRootHash,
    getMerkleTreeString,
    getRootHashString
};