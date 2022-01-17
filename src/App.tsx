import React, { useRef, useState } from "react";
import "./App.css";
import useSvgViewbox from "./hook/use-svg-viewbox";

function App() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useSvgViewbox({
    ref: svgRef,
    initialViewBoxValue: "0 0 800 800",
  });

  return (
    <div className="App">
      {/* SVG Thumbnail */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 800 800"
      >
        <rect x="0" y="0" width="200" height="200" />
        <rect x="400" y="0" width="200" height="200" fill="orange" />

        <rect x="200" y="200" width="200" height="200" fill="red" />
        <rect x="600" y="200" width="200" height="200" fill="blue" />

        <rect x="0" y="400" width="200" height="200" fill="yellow" />
        <rect x="400" y="400" width="200" height="200" fill="green" />

        <rect x="200" y="600" width="200" height="200" fill="purple" />
        <rect x="600" y="600" width="200" height="200" fill="pink" />
      </svg>

      {/* The demo */}
      <svg
        className="svg-demo"
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        ref={svgRef}
      >
        <rect x="0" y="0" width="200" height="200" fill="black" />
        <rect x="400" y="0" width="200" height="200" fill="orange" />

        <rect x="200" y="200" width="200" height="200" fill="red" />
        <rect x="600" y="200" width="200" height="200" fill="blue" />

        <rect x="0" y="400" width="200" height="200" fill="yellow" />
        <rect x="400" y="400" width="200" height="200" fill="green" />

        <rect x="200" y="600" width="200" height="200" fill="purple" />
        <rect x="600" y="600" width="200" height="200" fill="pink" />
      </svg>

      <div>
        <div>SVG grid size: 800x800. Viewbox value: {viewBox}</div>
        <button onClick={() => setViewBox("400 0 200 200")}>Square 3</button>
        <button onClick={() => setViewBox("0 0 400 400")}>
          Squares 1,2,5,6
        </button>
        <button onClick={() => setViewBox("200 200 600 600")}>set hooks</button>
        <button onClick={() => setViewBox("0 0 800 800")}>Full View</button>
      </div>
    </div>
  );
}

export default App;
