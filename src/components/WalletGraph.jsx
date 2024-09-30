import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./styles/WalletGraph.css";

const WalletGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth; // Fit to viewport width
    const height = window.innerHeight; // Fit to viewport height

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Define arrowheads for the links
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-0 -5 10 10")
      .attr("refX", 30) // Increased to account for larger spacing
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("xoverflow", "visible")
      .append("path")
      .attr("d", "M 0,-5 L 10 ,0 L 0,5")
      .attr("fill", "#64b5f6")
      .style("stroke", "none");

    // Sample wallet data
    const wallets = [
      { id: "0x1234...5678", status: "main", color: "#64b5f6" },
      { id: "0xabcd...ef12", status: "suspicious", color: "#ff5252" },
      { id: "0x2345...6789", status: "normal", color: "#69f0ae" },
      { id: "0x3456...7890", status: "normal", color: "#69f0ae" },
      { id: "0x4567...8901", status: "suspicious", color: "#ff5252" },
      { id: "0x5678...9012", status: "normal", color: "#69f0ae" },
      { id: "0x6789...0123", status: "normal", color: "#69f0ae" },
      { id: "0x7890...1234", status: "normal", color: "#69f0ae" },
      { id: "0x8901...2345", status: "suspicious", color: "#ff5252" },
      { id: "0x9012...3456", status: "normal", color: "#69f0ae" },
    ];

    // Generate links
    const links = wallets.slice(1).map((wallet) => ({
      source: wallets[0].id,
      target: wallet.id,
    }));

    // Add some connections between other nodes
    for (let i = 0; i < 5; i++) {
      const source =
        wallets[1 + Math.floor(Math.random() * (wallets.length - 1))].id;
      const target =
        wallets[1 + Math.floor(Math.random() * (wallets.length - 1))].id;
      if (source !== target) {
        links.push({ source, target });
      }
    }

    // D3 force simulation
    const simulation = d3
      .forceSimulation(wallets)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(250)
      ) // Increased distance
      .force("charge", d3.forceManyBody().strength(-1000)) // Increased repulsion
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Draw links
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#64b5f6")
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrowhead)");

    // Draw nodes
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(wallets)
      .enter()
      .append("circle")
      .attr("r", (d) => (d.status === "main" ? 40 : 40))
      .attr("fill", (d) => d.color)
      .attr("stroke", "#000000") // Changed to black for visibility
      .attr("stroke-width", 2)
      .call(
        d3
          .drag()
          .on("start", dragStarted)
          .on("drag", dragged)
          .on("end", dragEnded)
      );

    // Add labels
    const labels = svg
      .append("g")
      .selectAll("text")
      .data(wallets)
      .enter()
      .append("text")
      .attr("font-size", 12)
      .attr("fill", "#000000") // Changed to black for visibility
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .text((d) => d.id);

    // Update positions on each tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    // Drag functions
    function dragStarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragEnded(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Add legend
    // const legend = svg.append("g")
    //   .attr("font-family", "sans-serif")
    //   .attr("font-size", 10)
    //   .attr("text-anchor", "start")
    //   .selectAll("g")
    //   .data(["Main", "Normal", "Suspicious"])
    //   .enter().append("g")
    //   .attr("transform", (d, i) => `translate(20,${i * 20 + 20})`);

    // legend.append("rect")
    //   .attr("x", 0)
    //   .attr("width", 19)
    //   .attr("height", 19)
    //   .attr("fill", d => d === "Main" ? "#64b5f6" : d === "Normal" ? "#69f0ae" : "#ff5252");

    // legend.append("text")
    //   .attr("x", 24)
    //   .attr("y", 9.5)
    //   .attr("dy", "0.32em")
    //   .text(d => d)
    //   .attr("fill", "#000000");  // Changed to black for visibility
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WalletGraph;
