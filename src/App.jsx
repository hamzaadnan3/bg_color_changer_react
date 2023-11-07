import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed bottom-5 flex flex-wrap justify-center w-full bg-white rounded-3xl p-2 gap-2 ">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-3xl"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded-3xl"
          onClick={() => setColor("green")}
        >
          Green
        </button>{" "}
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-3xl"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>{" "}
        <button
          className="bg-pink-500 text-white px-2 py-1 rounded-3xl"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
