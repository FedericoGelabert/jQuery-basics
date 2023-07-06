import Ajax from "./content/Ajax";
import Effects from "./content/Effects";
import Events from "./content/Events";
import Exercises from "./content/Exercises";
import FinalMessage from "./content/FinalMessage";
import Install from "./content/Install";
import Introduction from "./content/Introduction";
import Methods from "./content/Methods";
import Plugins from "./content/Plugins";
import Selectors from "./content/Selectors";
import Use from "./content/Use";

function Content() {

    return (
        <div className="content">
            <Introduction/>
            <Install/>
            <Use/>
            <Selectors/>
            <Methods/>
            <Events/>
            <Effects/>
            <Ajax/>
            <Exercises/>
            <Plugins/>
            <FinalMessage/>
        </div>
    )
}

export default Content;