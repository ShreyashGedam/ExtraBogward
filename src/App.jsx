import "./App.css";
import Debouncing from "./components/Debouncing/Debouncing";
import Compone from "./components/Higherorder/Compone";
import Comptwo from "./components/Higherorder/Comptwo";
import Throtlling from "./components/Throtlling/Throtlling";
import Usecallback from "./components/UseCallback/Usecallback";
import { Usememo } from "./components/UseMemo/UseMemo";

function App() {
  // highrt order Function
  function helloOne(helloTwo) {
    console.log("helloONe");
  }

  // Callback
  function helloTwo() {
    console.log("HELLO@");
  }

  return (
    <div className="container">
      {/* <Usememo /> */}
      {/* <Usecallback /> */}
      {/* <Compone />
      <Comptwo /> */}
      {/* <Debouncing /> */}
      <Throtlling />
    </div>
  );
}

export default App;
