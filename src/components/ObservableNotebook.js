import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "bd919d45bc83756d";

function Notebook() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>
        <a href="https://observablehq.com/d/bd919d45bc83756d@194">
          Zoomable circle packing by Akhila Sulgante
        </a>
      </p>
    </>
  );
}

export default Notebook;
