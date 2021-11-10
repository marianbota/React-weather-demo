import './App.css';

//NOTE importing nested components
import WeatherScreen from './WeatherScreen'
import Definitions from "./Definitions";

//NOTE: this is the app component.
//NOTE: a function can be a component.
//NOTE: a class can also be a component.
function App() {
  return (
      //NOTE empty element wrapper needed because the return statement of a component can only return one fragment
      <>
        <h1>Component jsx code can go here</h1>

        {/*These are nested components*/}
        <Definitions />
        <WeatherScreen />
      </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

//NOTE this is used to make the "App" visible outside this file
export default App;
