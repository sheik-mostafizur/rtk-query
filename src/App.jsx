import {useSelector} from "react-redux";
import {Counter} from "./component/counter";

function App() {
  const {value: counterState} = useSelector((state) => state.counter);

  return (
    <>
      <h1>Hello RTK Query</h1>
      <Counter />
      <h2>Counter Value: {counterState}</h2>
    </>
  );
}

export default App;
