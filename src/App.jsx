import useSwitch from "./custom_hooks/useSwitch";
import useDate from "./custom_hooks/useDate";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentData = useDate();
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button className="mt-3" onClick={toggle}>
          Cambia stato
        </button>
        <div className="mt-4">
          <p>
            Orario in tempo reale: <b>{currentData}</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
