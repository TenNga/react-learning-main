import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import Cortana from './images/cortana.png';
import Siri from './images/siri.png';

function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana32" image={Cortana} />
            <ProfileCard title="Siri" handle="@Siri01" image={Siri} />
        </div>
    );
}

export default App;