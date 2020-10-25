import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'
import Form from './components/UserChoice'
import Home from './components/Home';
import UserChoice from './components/UserChoice';

function App() {
  return (
    <div className="App">
      <Home />
      <Calendar />
      <UserChoice />
    </div>
  );
}

export default App;
