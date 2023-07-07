import './App.css';
import Body from './components/Body/Body';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Topnav from './components/Topnav/Topnav';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Settings />
      <Topnav />
      <Body />
    </div>
  );
}

export default App;
