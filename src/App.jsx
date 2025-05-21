import WalletCard from "./components/WalletCard";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <WalletProvider>
      <WalletCard />

      </WalletProvider>


    </div>
  );
}

export default App;
