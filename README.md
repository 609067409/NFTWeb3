# 安装项目依赖
```
npm install
```
# 本地创建ipfs服务用于上传电影信息
```
npm install -g ipfs
jsipfs init
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"*\"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials true
jsipfs daemon
```

# 运行项目
```
npm start
```
# 开发流程

- 编写合约脚本/src/contracts/Czy.sol
- 部署合约到Goerli test net
```
//部署合约到Goerli脚本
npx hardhat run scripts/deploy.js --network 
```
- 查看是否创建成功登录
[Goerli Testnet Network](https://goerli.etherscan.io/) 输入ERC721 contract  
```0xe5aAD39C3C73a3254c232Ed6F6Fb4eAA10c93943```
进行查询合约
- 使用@web3-react/core，@web3-react/injected-connector插件连接钱包地址，获取钱包信息
- 使用@ethersproject/contracts，@ethersproject/providers获取NFT信息，铸币
- 使用ipfs-http-client连接ipfs存储NFT相关信息