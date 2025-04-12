import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const cc = "   d";

  return (
    <>
      <div className="p-5 text-cyan-700 ">
        <button
          type="button"
          className="rounded-md bg-red-200 px-4 py-2 text-red-400 "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div style={{ color: count === 20 ? "green" : "violet        " }}>
          THIS IS A TEST
        </div>
      </div>
    </>
  );
}

export default App;

const AAA = () => {
  return <p className="px-2 text-red-700 ">aaa</p>;
};
