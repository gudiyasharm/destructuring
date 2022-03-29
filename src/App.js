import './App.css';
import ObjectDes from './components/ObjectDes'
import Filter from './components/Filter';
import Reduce from './components/Reduce';
import Every from './components/Every';
import Some from './components/Some';

function App() {
  return (
    <div className="App">
      <ObjectDes />
      <Filter />
      <Reduce />
      <Every />
      <Some />
    </div>
  );
}

export default App;
