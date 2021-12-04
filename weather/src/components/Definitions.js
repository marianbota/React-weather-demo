//NOTE components can have css files
import './Definitions.css';

function Definitions() {
    return(
        <>
            <h2>Definitions</h2>
            <dl>
                <dt>JSX</dt>
                <dd>Is a syntax extension to JavaScript. JSX produces React “elements”</dd>
                <dd>
                    Instead of artificially separating technologies by putting markup and logic in separate files,
                    React separates concerns with loosely coupled units called “components” that contain both.
                </dd>

                <dt>Fragment</dt>
                <dd>Fragments let you group a list of children without adding extra nodes to the DOM.</dd>

                <dt>key props</dt>
                <dd>
                    Keys help React identify which items have changed, are added, or are removed. 
                    Keys should be given to the elements inside the array to give the elements a stable identity
                </dd>
            </dl>
        </>
    );
}

export default Definitions
