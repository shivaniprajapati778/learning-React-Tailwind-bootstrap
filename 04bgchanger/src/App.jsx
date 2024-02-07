import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="W-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}>
            red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Green" }}>
            Green
          </button>
          <button
            onClick={() => setColor("Brown")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Brown" }}>
            Brown
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "purple" }}>
            Purple
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Blue" }}>
            Blue
          </button>
          <button
            onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "gray" }}>
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
