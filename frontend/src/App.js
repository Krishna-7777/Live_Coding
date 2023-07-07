import './App.css';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Topnav from './components/Topnav/Topnav';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Settings />
      <Topnav />
    </div>
  );
}

export default App;
