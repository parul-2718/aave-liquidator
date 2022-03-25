const Web3 = require("web3");
const globalAny:any = global;

export const setGlobals = () => {
    globalAny.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/" + process.env.INFURA_KEY));
    globalAny.fromAccount = process.env.FROM_ACCOUNT
    globalAny.privateKey = process.env.PRIVATE_KEY
    globalAny.lpAddressProviderAddress = "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728"
}
