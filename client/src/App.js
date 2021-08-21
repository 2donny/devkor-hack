import './App.css';
import Register from './profile/Register';
import { NavLink,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavLink to= "/register"> 
        
      </NavLink>
      <Route path="/register" component={Register}></Route>
    </div>
  )
}

export default App;
