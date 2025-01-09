# OpenAI Assistant with ERC20 Token Deployment

## Description
This project is an interactive CLI application that combines OpenAI's Assistant API with blockchain functionality. It allows users to interact with an AI assistant that can help deploy ERC20 tokens on the Base Sepolia testnet through natural language commands.

### Key Features
- Interactive CLI interface
- OpenAI Assistant integration
- ERC20 token deployment capability
- Base Sepolia testnet support
- Natural language processing for blockchain operations

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- An OpenAI API key
- A wallet private key for Base Sepolia transactions
- Base Sepolia RPC URL (from providers like Alchemy or Infura)

## Installation

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Set up your environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `BASE_SEPOLIA_PRIVATE_KEY`: Your wallet private key for Base Sepolia
   - `BASE_SEPOLIA_RPC_URL`: Your Base Sepolia RPC URL
4. Run the application: `npm start` or `yarn start`

This will start the CLI interface, allowing you to interact with the AI assistant and perform blockchain operations.

## Usage

1. Interact with the assistant using natural language. Example commands:
- "Deploy an ERC20 token with name 'MyToken' and symbol 'MTK'"
- "Deploy a token with 1 million initial supply"

2. Type 'exit' to quit the application

## Example Interactions

## Project Structure

## Development

### Building the Project

## Security Considerations
- Never share your private key or environment variables
- The assistant will verify wallet addresses and amounts before transactions
- Smart contract deployments follow security best practices
- The assistant will ask for clarification if a request seems risky

## Troubleshooting

### Common Issues
1. **OpenAI API Errors**
   - Verify your API key is correct
   - Check your API usage limits

2. **Transaction Failures**
   - Ensure you have enough Base Sepolia ETH for gas
   - Verify your RPC URL is correct
   - Check your wallet private key is properly set

3. **Network Issues**
   - Confirm Base Sepolia network is operational
   - Verify your internet connection

## Development

### Running in Development Mode

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
[MIT License](LICENSE)

## Support
For support, please open an issue in the GitHub repository or contact [your-contact-info].

## Acknowledgments
- OpenAI for their Assistant API
- Base for their testnet infrastructure
- Viem for blockchain interactions
