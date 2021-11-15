//NOTE importing nested components
import WeatherScreen from './components/WeatherScreen'
import Definitions from "./components/Definitions";

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
}

//NOTE this is used to make the "App" visible outside this file
export default App;
