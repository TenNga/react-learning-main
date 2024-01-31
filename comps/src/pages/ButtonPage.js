import Button from "../components/Button";
import '../index.css';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {

    return (
      <div>
        <div>
          <Button primary rounded className="mb-5">
            Click me!
            <GoBell />
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Click here!
            <GoCloudDownload />
          </Button>
        </div>
        <div>
          <Button success>
            Click there!
            <GoDatabase />
          </Button>
        </div>
        <div>
          <Button warning>Click on!</Button>
        </div>
        <div>
          <Button danger rounded outline>
            Click off!
          </Button>
        </div>
        <div>
          <Button danger>Click off!</Button>
        </div>
      </div>
    );
};

export default App;