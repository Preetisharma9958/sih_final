import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./styles/WalletAddressChart.css";

const generateRandomWave = (length, min = 300, max = 800) => {
  let value = Math.random() * (max - min) + min;
  return Array.from({ length }, () => {
    value += (Math.random() - 0.5) * 100;
    return Math.max(min, Math.min(max, value));
  });
};

const isSuspicious = (value) => {
  return value > 700;
};

const walletAddresses = [
  "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "0x123f681646d4a755815f9cb19e1acc8565a0c2ac",
  "0x8e215d06ea7ec1fdb4fc5fd21768f4b34ee92ef4",
  "0x2910543af39aba0cd09dbb2d50200b3e800a63d2",
  "0x0a869d79a7052c7f1b55a8ebabbea3420f0d1e13",
];

const walletColors = [
  "#FF6384", // Red
  "#36A2EB", // Blue
  "#FFCE56", // Yellow
  "#4BC0C0", // Teal
  "#9966FF", // Purple
];

const initialData = Array.from({ length: 24 }, (_, i) => {
  const walletData = {};
  walletAddresses.forEach((address) => {
    const value = generateRandomWave(1)[0];
    walletData[address] = {
      value,
      suspicious: isSuspicious(value),
    };
  });
  return {
    time: `${i.toString().padStart(2, "0")}:00`,
    ...walletData,
  };
});

const WalletAddressChart = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        const currentTime = new Date();
        const newEntry = {
          time: `${currentTime
            .getHours()
            .toString()
            .padStart(2, "0")}:${currentTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`,
        };
        walletAddresses.forEach((address) => {
          const value = generateRandomWave(1)[0];
          newEntry[address] = {
            value,
            suspicious: isSuspicious(value),
          };
        });
        newData.push(newEntry);
        return newData;
      });
    }, 5000); // Update every 5 seconds for better visibility of changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div classname="chart">
      <div className="page-container">
        <div className="Heading">
          <div className="main-heading">DASHBOARD</div> {/* Centered Heading */}
        </div>
        <div className="chart-container">
          <h2 className="graph-heading"></h2>
          <ResponsiveContainer width="100%" height={400} overflow="hidden">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 18 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                dataKey="time"
                tickMargin={10}
                tick={{ fill: "white" }}
                label={{ value: "Time", position: "bottom", fill: "white" }}
              />
              <YAxis
                tick={{ fill: "white" }}
                axisLine={{ stroke: "white" }}
                label={{
                  value: "Amount ($)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "white",
                }}
                domain={[200, 1000]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#000",
                  border: "1px solid #00ff00",
                  borderRadius: "0",
                }}
                labelStyle={{ color: "#00ff00" }}
                itemStyle={{ color: "#00ff00" }}
              />
              {walletAddresses.map((address, index) => (
                <Line
                  key={address}
                  type="monotone"
                  dataKey={`${address}.value`}
                  stroke={walletColors[index]}
                  dot={false}
                  strokeWidth={2}
                  name={`Wallet ${index + 1}`}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>

          <table className="wallet-table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Wallet Address</th>
                <th>Current Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {walletAddresses.map((address, index) => {
                const latestData = data[data.length - 1][address];
                return (
                  <tr key={address}>
                    <td>
                      <div
                        className="color-indicator"
                        style={{ backgroundColor: walletColors[index] }}
                      />
                    </td>
                    <td>{address}</td>
                    <td>{latestData.value.toFixed(2)}</td>
                    <td
                      className={
                        latestData.suspicious ? "suspicious" : "normal"
                      }
                    >
                      {latestData.suspicious ? "Suspicious" : "Normal"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletAddressChart;
