import { useState, useRef, useEffect } from 'react';
import WeatherScreen from '../components/WeatherScreen'
import { v4 as uuidv4 } from 'uuid';

function WeatherMonitor() {

    const nameInputRef = useRef();
    let [cities, setCities] = useState([]);

    useEffect(() => {
        //NOTE dependecy cities changed so we are running this function
        nameInputRef.current.value = "";
    }, [cities])

    function addScreen() {
        setCities([...cities, nameInputRef.current.value])
    }

    return(
        <>
            <h2>Weather reports</h2>

            <input ref={nameInputRef}/>
            <button onClick={addScreen}>Add Screen</button>

            {/*NOTE initialCity is a prop*/}
            <div className="d-flex justify-content-start flex-wrap mt-3 me-5">
            {
                cities.map(city => { 
                    return <WeatherScreen key={uuidv4()} initialCity={city} /> 
                })
            }
            </div>        
        </>
    );
}

export default WeatherMonitor;