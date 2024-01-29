import Button from "./Button";
import './index.css';

function App() {
    return (<div>
        <div><Button primary rounded>Click me!</Button></div>
        <div><Button secondary>Click here!</Button></div>
        <div><Button success>Click there!</Button></div>
        <div><Button warning>Click on!</Button></div>
        <div><Button danger>Click off!</Button></div>
    </div>)
};

export default App;