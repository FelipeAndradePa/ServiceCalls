//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from './views/login/login';
import Content from './components/content/content';
import Finalized from './views/finalized/finalized';
import Progress from './views/progress/progress';
import New from './views/new/new';
import PrivateRoute from './components/auth/auth';
import Initial from './views/initial/initial';

/*O PrivateRoute recebe como element a view que será carregada*/
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/content' element={<Content/>}>
              <Route path='' element={<PrivateRoute element={<Initial />}/>}/>

              <Route path='finalized' element={<PrivateRoute element={<Finalized />}/>} />

              <Route path='progress' element={<PrivateRoute element={<Progress />}/>} />

              <Route path='new' element={<PrivateRoute element={<New />}/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
