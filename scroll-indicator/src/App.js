import './App.css';
import './components/styles.css'
import ScrollIndicator from './components/index'
function App() {
  return (
    <div className="App">
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
