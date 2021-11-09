import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import DetailPage from './screens/detailPage/detailPage';
import IndexPage from './screens/indexPage/indexPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route path='/articles' component={IndexPage} />
          <Route path='/detail_page' component={DetailPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
