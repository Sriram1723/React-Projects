import './App.css';
import './styles.css'
import ScrollToSection from './scroll-to-section';
// import ScrollToTopToBottom from './scroll-to-top-to-bottom';
// import TestuseFetch from './components/testuseFetch';
// import UseOutsideClickHook from './components/useOutsideClick';
// import TestuseWindowResize from './components/testuseWindowResize';

function App() {
  return (
    <div className="App">
      {/* <UseOutsideClickHook/> */}
      {/* <TestuseWindowResize/> */}
      {/* <TestuseFetch url = {'https://dummyjson.com/products?limit=100'}/> */}
      {/* <ScrollToTopToBottom url = {'https://dummyjson.com/products?limit=100'}/> */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
