import WalletAddressChart from "./WalletAddressChart";
import TransactionTable from "./TransactionTable";
import { useNavigate } from "react-router-dom";
import "./styles/wallet.css";

export default function Wallet() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchClick = () => {
    navigate("/insert"); // Navigate to WalletForm on click
  };
  return (
    <div className="Wallet">
      <button className="search-button" onClick={handleSearchClick}>
        SEARCH
      </button>
      <WalletAddressChart />
      {/* <TransactionTable /> */}
    </div>
  );
}
