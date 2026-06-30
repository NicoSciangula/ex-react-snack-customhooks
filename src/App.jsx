import useSwitch from "./custom_hooks/useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button className="mt-3" onClick={toggle}>
          Cambia stato
        </button>
      </div>
    </>
  );
}

export default App;
