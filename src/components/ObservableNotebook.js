import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "bd919d45bc83756d";

function Notebook() {
  // const chartRef = useRef();

  // useEffect(() => {
  //   const runtime = new Runtime();
  //   runtime.module(notebook, (name) => {
  //     if (name === "chart") return new Inspector(chartRef.current);
  //   });
  //   return () => runtime.dispose();
  // }, []);

  return (
    <>
      <iframe
        width="100%"
        height="422"
        frameborder="0"
        src="https://observablehq.com/embed/bd919d45bc83756d?cells=chart"
      ></iframe>
    </>
  );
}

export default Notebook;
