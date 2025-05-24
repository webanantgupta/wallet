# 🦊 MetaMask Wallet Connection App using React & ethers.js

This is a simple and clean React app that lets users connect their MetaMask wallet. Once connected, it displays the wallet address, the Ethereum network they're on, and their ETH balance. It uses **ethers.js** for interacting with the blockchain and **React Context API** to help manage the wallet state globally (useful as the app grows).

---

## 📦 Tech Stack

- **React** – For building the user interface
- **ethers.js** – Handles Ethereum wallet connection and balance retrieval
- **Tailwind CSS** – For quick and clean styling
- **React Context API** – To set up a global wallet state

---

## 🧠 Approach (In Plain English)

### 1. `WalletCard.jsx` – The Main Wallet UI
- When the user clicks **Connect Wallet**, the app asks MetaMask to connect using `eth_requestAccounts`.
- Once connected, it grabs the wallet address, current network name, and ETH balance using `ethers.js`.
- These details are stored in local state (`useState`) and shown in a nice card layout.
- Also listens for:
  - **Account changes** – If the user switches MetaMask accounts, the wallet reconnects automatically.
  - **Chain/network changes** – If the user switches networks, the app reloads to stay updated.

### 2. `WalletContext.js` – Global Wallet State
- Even though it's not used in `WalletCard` yet, I’ve already added a context setup with `createContext` and `useContext`.
- This is a great starting point for managing wallet data across multiple components if the app grows bigger later.

### 3. `App.js` – Main App Setup
- It wraps everything inside `WalletProvider`, so the context is available.
- The wallet UI is centered using Tailwind utility classes.

---

## 🧪 A Few Assumptions

- The user already has MetaMask installed in their browser.
- It only works with **Ethereum-compatible** networks (for now).
- The app is opened in a modern browser that supports `window.ethereum`.

## 🚀 Getting Started

If you want to try this locally, here’s how:

### 1. Clone the repo
```bash
git clone https://github.com/your-username/metamask-wallet-app.git
cd metamask-wallet-app
