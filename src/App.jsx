import { useState } from "react";
import LoveMessage from "./LoveMessage";

function App() {
  const [name, setName] = useState("");
  const [showLove, setShowLove] = useState(false);

  const handleShowLove = () => {
    if (name.trim() !== "") {
      setShowLove(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold text-pink-600">💌 LOP LOP</h1>

        <input
          type="text"
          placeholder="Nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-4 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          onClick={handleShowLove}
          className="mt-4 w-full bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition"
        >
          Tampilkan Cinta ❤️
        </button>
      </div>

      {showLove && <LoveMessage name={name} />}
    </div>
  );
}

export default App;
