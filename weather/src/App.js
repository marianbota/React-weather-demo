//NOTE importing nested components
//NOTE non default export must be imported with brackets
//NOTE default exports must be imported without brackets
import Viorel from "./components/Definitions";
import WeatherMonitor from './components/WeatherMonitor';

//NOTE: this is the app component.
//NOTE: a function can be a component.
//NOTE: a class can also be a component.
function App({cities}) {
  //NOTE empty element wrapper needed because the return statement of a component can only return one fragment
  return (      
      <>
        <h3>Component jsx code can go here</h3>

        {/*These are nested components*/}
        <Viorel />
        <WeatherMonitor/>

      </>
  );
}

//NOTE this is used to make the "App" visible outside this file
//NOTE there can be only one default export from a module
export default App;

//NOTE example on exporting a const
export const a = 3;

