import "./App.css";
import Button from './Components/Button';

function App() {

  const num = 5
  const result = num * 5


  return (
    <div className="App">
      <header className="App-header">
        { result }
        <Button name="Hola grupo de react" color='green'/>
        <Button name="Hola grupo de react pero rojo" color='red'/>
      </header>
    </div>
  );
}

export default App;
