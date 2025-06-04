
# Olive Project – Solana DApp Dashboard

This is a starter React DApp for the Olive Project that allows users to:

- Connect their Solana wallet
- View token holdings (S-OLV, U-OLV)
- See assigned olive trees (NFT-style)
- View and claim profit distributions

## 🧰 Setup

1. Clone the project:
   ```
   git clone [this repo]
   cd olive_project_dapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Add TailwindCSS and Wallet Adapter:
   ```
   npm install -D tailwindcss
   npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-react-ui
   ```

4. Run the dev server:
   ```
   npm run dev
   ```

Ensure `TailwindCSS` and PostCSS are properly configured if styling doesn't render correctly.

## 💡 Notes

This app connects to Solana Devnet. Replace placeholder logic with live token balances and smart contract interactions for production use.
