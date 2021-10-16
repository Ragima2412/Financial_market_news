import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
