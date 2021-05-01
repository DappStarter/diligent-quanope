require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good enter bottom solution finger deliver remind concert gesture inflict swing sketch'; 
let testAccounts = [
"0x2ccc039184864765d4c5c77dd141a81667ae34b934af4a9040a9d673611c075c",
"0x63c9991a03646f8b91bf9e460f025cdc36f1560e386f384ff35001652715fc0b",
"0x4e016fdbc32f70fb1ea1704125949eee6f0fa41d73130ac5a6de24de8044c808",
"0xa3c6510583819a4032899dbb291c941e1717bf8546742a2d499f55c25503ecd2",
"0x4c0ff73b6d4064c7985d7664a54aae6718413604defbc751ce5f45344bd6f791",
"0xb9b047d0a6ece674ccd98ff99b0cd49a963d8c17db67da41fa316d6cc14f9790",
"0xb43defce7fc826fba376ea1afc984b65aac8a64f75158dcff692053dcd056f2b",
"0x67291f9749e4e64a1d7028f3c60b30fe57b59b9a326873ad400a05abb882ccfa",
"0x1b2b0034ffca001357e91ec8cd14e2fde6faec204d6301d940fcec2562cb8f17",
"0xb812dbd78c4c990569caf98cea69a7108b2957d487aa9e39a46af613bcae4cf4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


