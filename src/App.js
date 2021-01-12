import {React} from './adaptation';
import logo from './logo.svg';
import './App.css';
import { Comp1, Comp2, Comp3 } from './components/jsx-comp';

function App() {
  return (
    <div className="App">
      <Comp1/>
      <Comp2/>
      <Comp3/>
    </div>
  );
}

export default App;
