import logo from "./logo.svg";
import "./App.css";
import ClassConditionalRenderCount from "./components/ClassConditionalRenderCount";
import UseEffectConditionalRenderCount from "./components/UseEffectConditionalRenderCount";

function App() {
  return (
    <div className="App">
      {/* <ClassConditionalRenderCount /> */}
      <UseEffectConditionalRenderCount />
    </div>
  );
}

export default App;
