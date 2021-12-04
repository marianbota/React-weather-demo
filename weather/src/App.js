//NOTE importing nested components
import Definitions from "./components/Definitions";
import WeatherMonitor from './components/WeatherMonitor';

//NOTE: this is the app component.
//NOTE: a function can be a component.
//NOTE: a class can also be a component.
function App({cities}) {
  return (
      //NOTE empty element wrapper needed because the return statement of a component can only return one fragment
      <>
        <h3>Component jsx code can go here</h3>

        {/*These are nested components*/}
        <Definitions />
        <WeatherMonitor/>

      </>
  );
}

//NOTE this is used to make the "App" visible outside this file
export default App;
