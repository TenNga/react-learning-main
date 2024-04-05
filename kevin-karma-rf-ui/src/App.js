import './App.scss';
import Header from './components/Header';
import OrgSettings from './components/OrgSettings';
import SubHeader from './components/SubHeader';

function App() {
  return (
    //className here show case a way to use css by predefining lot of properties
    //kind of taking feature from tailwind
    //** I'm just showcasing one way to do it, I won't be doing this way since 
    // time is limited */
    <div className="main-container ml-12 mr-12 mt-10">
      <Header />
      <SubHeader />
      <OrgSettings />
    </div>
  );
}

export default App;
