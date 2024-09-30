import React from "react";
import "./styles/TransactionTable.css"; // Optional: separate CSS for table

const TransactionTable = ({ transactions, onDownload }) => {
  return (
    <div
      style={{
        // width: "100%",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Frequency</th>
            <th>Mixer Used</th>
            <th>Risk Score</th>
            <th>Location</th>
            <th>Date Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={
                transaction.riskScore > 5
                  ? "risk-high"
                  : transaction.riskScore > 4
                  ? "risk-medium"
                  : "risk-low"
              }
            >
              <td>{transaction.name}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.frequency}</td>
              <td>{transaction.mixerUsed}</td>
              <td>{transaction.riskScore}</td>
              <td>{transaction.location}</td>
              <td>{new Date(transaction.dateTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Download Button */}
      <button onClick={onDownload}>Download Data</button>
    </div>
  );
};

export default TransactionTable;
