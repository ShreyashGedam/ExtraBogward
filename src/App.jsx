import "./App.css";
import Usecallback from "./components/UseCallback/Usecallback";
import { Usememo } from "./components/UseMemo/UseMemo";

function App() {
  return (
    <div className="container">
      {/* <Usememo /> */}
      <Usecallback />
    </div>
  );
}

export default App;
