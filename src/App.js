import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Addtask from './components/Addtask';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Addtask/>
          </Route>
        </Switch>
      </div>
   </BrowserRouter>
  );
}

export default App;






