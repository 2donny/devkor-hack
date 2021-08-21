import './App.css';
import Register from './profile/Register';
import { NavLink,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavLink to= "/register"> 
        <button >임시 추가 버튼</button>
      </NavLink>
      <Route path="/register" component={Register}></Route>
    </div>
  )
}

export default App;
