import "./App.css";
import TicTacToe from "./TicTacToe/TicTacToe";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Analytics />

      <div className="min-h-screen bg-[#0f1b21] flex justify-center items-center">
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
