import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="shivi with react" btntext="click me" />
      <Card username="shivi" />
    </>
  );
}

export default App;
