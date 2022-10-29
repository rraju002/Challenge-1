import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component= {Dashboard} />
      </BrowserRouter>

    </div>
  );
}

export default App;
