//NOTE components can have css files
import './Definitions.css';

function Definitions() {
    return(
        <>
            <h3>Definitions</h3>
            <dl>
                <dt>JSX</dt>
                <dd>Is a syntax extension to JavaScript. JSX produces React “elements”</dd>
                <dd>
                    Instead of artificially separating technologies by putting markup and logic in separate files,
                    React separates concerns with loosely coupled units called “components” that contain both.
                </dd>

                <dt>Fragment</dt>
                <dd>Fragments let you group a list of children without adding extra nodes to the DOM.</dd>
            </dl>
        </>
    );
}

export default Definitions
