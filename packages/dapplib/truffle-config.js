require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember promote hidden private orange gather'; 
let testAccounts = [
"0x912b1dcf3be6e9bc4aa24d0d563f96a4242578e6477dea0249f61e8c31891f74",
"0xc366feaa614a7881dac0388b10ede5b54912643fa88294edcd9a2081b4923858",
"0xe7b9ccd41d0f25948298608f6a7700b274487eace383e8ad4d28dfe9f3792d3f",
"0xa63d8300543d579ab421450fe3b22f37b9f64ed01bb7cb0330ae8f528805076c",
"0xf3acb4eddb64efdc27778bf1e958151f1f3e6dfe5ca3c081d625d660869c361e",
"0xda5a5bea04022dd15aa16f825b0c508e55459bd6158a905f69a46a7b4f8170e2",
"0xf84997f58316304eb693fcdd3c7f782fc8bb494204e86e1a50c6191eaaf9ec9e",
"0xef07ca7d9e50b51797be302f9e3b5510e0605d894b7cfae30f27a7bd6afc26c5",
"0xe091bf43e90f29bb25b00c4f0c14444f53fd7f30bc0ef5a94ef1f65d74e711d8",
"0x687d5e0d6a1430efc0357eb4d478f85592018ce9b792cfc4b3407114b4db5b7e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


