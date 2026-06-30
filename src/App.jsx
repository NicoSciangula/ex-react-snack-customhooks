import useSwitch from "./custom_hooks/useSwitch";
import useDate from "./custom_hooks/useDate";
import useCustomPointer from "./custom_hooks/useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentData = useDate();
  const customPointer = useCustomPointer(<span>?</span>);
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        style={{ cursor: "none", minHeight: "100vh", width: "100vh" }}
      >
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button className="mt-3" onClick={toggle}>
          Cambia stato
        </button>
        <div className="mt-4">
          <p>
            Orario in tempo reale: <b>{currentData}</b>
          </p>
        </div>
        <div>{customPointer}</div>
      </div>
    </>
  );
}

export default App;
