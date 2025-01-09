# 🤖 AI-Powered Blockchain Assistant for Base Network

## 📝 Overview
An intelligent CLI assistant that combines OpenAI's GPT capabilities with blockchain functionality, enabling users to interact with the Base network through natural language commands. Deploy tokens, mint NFTs, check balances, and perform transactions - all through simple English prompts.

## ✨ Features

### 🏦 Wallet Operations
- Check wallet balances
- View transaction history
- Get wallet address

```
"What's my wallet balance?"
"Show me my wallet address"
```

### 💎 Token Operations (ERC20)
- Deploy new ERC20 tokens
- Mint tokens
- Transfer tokens

```
"Deploy an ERC20 token named 'MyToken' with symbol 'MTK'"
"Create a new token with name 'Cointopper' and symbol 'CTP'"
```

### 🎨 NFT Operations (ERC721)
- Deploy NFT collections
- Mint new NFTs
- Transfer NFTs

```
"Create an NFT collection called 'BaseApes'"
"Mint a new NFT to my wallet"
```

### 💸 Transaction Operations
- Send ETH
- Monitor gas fees
- Track transaction status
```bash
"Send 0.1 ETH to 0x123..."
"Check gas fees for Base network"
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Base Sepolia testnet ETH (for testing)
- OpenAI API key

### 🛠️ Installation

1. **Clone the Repository**
```bash
git clone <your-repository-url>
cd openai-assistant
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure Environment**
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key
PRIVATE_KEY=your_wallet_private_key
RPC_URL=your_base_sepolia_rpc_url
```

4. **Start the Application**
```bash
npm start
# or
yarn start
```

## 🌐 Network Configuration

### Base Sepolia (Testnet)
- Network Name: Base Sepolia
- RPC URL: https://sepolia.base.org
- Chain ID: 84532
- Currency Symbol: ETH
- Block Explorer: https://sepolia.basescan.org

### Getting Test ETH
1. Visit [Base Sepolia Faucet](https://sepoliafaucet.com)
2. Connect your wallet
3. Request test ETH

## 💻 Usage Guide

### Starting the Assistant
```bash
npm start
```

### Example Interactions

```plaintext
Welcome to the Base Network Assistant!

> Deploy an ERC20 token named "GameCoin" with symbol "GC"
🔄 Processing...
✅ Token deployed successfully!
Contract Address: 0x123...
Transaction Hash: 0x456...

> Check my wallet balance
🔄 Processing...
💰 Your wallet balance:
ETH: 1.5 ETH
GameCoin (GC): 1,000,000 tokens
```

## 🔒 Security Best Practices

### Wallet Security
- Never share your private key
- Use environment variables for sensitive data
- Keep your seed phrase secure

### Transaction Safety
- Always verify addresses
- Double-check transaction amounts
- Review gas fees before confirming

### Smart Contract Security
- Contracts are verified on deployment
- Standard security patterns implemented
- Automatic gas estimation

## 🛠️ Development

### Project Structure
```
openai-assistant/
├── src/
│   ├── index.ts                 # Entry point
│   ├── openai/                  # OpenAI integration
│   ├── tools/                   # Blockchain tools
│   ├── viem/                    # Web3 clients
│   └── utils/                   # Utilities
├── package.json
└── tsconfig.json
```

### Building
```bash
npm run build
```

### Testing
```bash
npm test
```

### Development Mode
```bash
npm run dev
```

## ❗ Troubleshooting

### Common Issues

1. **OpenAI API Errors**
   - Verify API key
   - Check usage limits
   - Ensure proper network connection

2. **Transaction Failures**
   - Confirm sufficient gas
   - Verify wallet balance
   - Check network status

3. **Network Issues**
   - Verify RPC URL
   - Check Base network status
   - Confirm wallet connection

## 📚 Additional Resources

- [Base Network Documentation](https://docs.base.org)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Viem Documentation](https://viem.sh)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- GitHub Issues: [Create Issue](<repository-url>/issues)
- Email: your.email@example.com
- Discord: [Join Our Community](<discord-link>)

## 🙏 Acknowledgments

- OpenAI for their Assistant API
- Base Network team
- Viem library contributors
- All our contributors and users

---

Made with ❤️ by [Your Name/Team]
```

This README includes:
1. Clear emojis for better readability
2. Comprehensive feature documentation
3. Detailed setup instructions
4. Security guidelines
5. Troubleshooting section
6. Development guidelines
7. Contributing instructions
8. Support channels

Remember to:
1. Replace placeholder URLs
2. Add your contact information
3. Update the license section
4. Add your team/personal information
5. Include any specific configuration details for your implementation