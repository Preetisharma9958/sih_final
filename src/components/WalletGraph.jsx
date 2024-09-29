import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./styles/WalletGraph.css"; // Import the corresponding CSS

const WalletGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "rgba(0, 0, 0, 0.7)") // Semi-transparent black background for SVG
      .style("position", "relative")
      .style("display", "block")
      .style("margin", "auto");

    // Define arrowheads for the links
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-0 -5 10 10")
      .attr("refX", 20)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("xoverflow", "visible")
      .append("path")
      .attr("d", "M 0,-5 L 10 ,0 L 0,5")
      .attr("fill", "cyan")
      .style("stroke", "none");

    // Sample wallet data and links
    const wallets = [
      {
        id: "0x1234567890abcdef1234567890abcdef12345678",
        status: "target",
        color: "purple",
      },
      {
        id: "0xabcdef1234567890abcdef1234567890abcdef12",
        status: "suspicious",
        color: "red",
      },
      {
        id: "0x7890abcdef1234567890abcdef1234567890abcd",
        status: "suspicious",
        color: "red",
      },
      {
        id: "0x4567890abcdef1234567890abcdef1234567890",
        status: "normal",
        color: "green",
      },
      {
        id: "0x234567890abcdef1234567890abcdef12345678",
        status: "normal",
        color: "green",
      },
      {
        id: "0xabcdef234567890abcdef1234567890abcdef12",
        status: "normal",
        color: "green",
      },
    ];

    const links = [
      {
        source: "0x1234567890abcdef1234567890abcdef12345678",
        target: "0xabcdef1234567890abcdef1234567890abcdef12",
      },
      {
        source: "0x1234567890abcdef1234567890abcdef12345678",
        target: "0x7890abcdef1234567890abcdef1234567890abcd",
      },
      {
        source: "0x1234567890abcdef1234567890abcdef12345678",
        target: "0x4567890abcdef1234567890abcdef1234567890",
      },
      {
        source: "0x1234567890abcdef1234567890abcdef12345678",
        target: "0x234567890abcdef1234567890abcdef12345678",
      },
      {
        source: "0x4567890abcdef1234567890abcdef1234567890",
        target: "0xabcdef234567890abcdef1234567890abcdef12",
      },
    ];

    // D3 force simulation
    const simulation = d3
      .forceSimulation(wallets)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(200)
      )
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Draw links
    const link = svg
      .append("g")
      .attr("stroke", "cyan")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("marker-end", "url(#arrowhead)");

    // Draw nodes
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(wallets)
      .enter()
      .append("circle")
      .attr("r", 35)
      .attr("fill", (d) => d.color)
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
      .attr("fill", "white")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .text((d) => d.id.substring(0, 6) + "..." + d.id.slice(-4));

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
    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);

  return (
    <div className="graph-container">
      {/* Background Image (optional) */}
      <div className="background-image" />
      {/* The SVG Graph */}
      <svg ref={svgRef}></svg>
      {/* Legend Table */}
      <div className="legend">
        <table border="1">
          <thead>
            <tr>
              <th>Status</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Target</td>
              <td style={{ backgroundColor: "purple" }}></td>
            </tr>
            <tr>
              <td>Suspicious</td>
              <td style={{ backgroundColor: "red" }}></td>
            </tr>
            <tr>
              <td>Normal</td>
              <td style={{ backgroundColor: "green" }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletGraph;
